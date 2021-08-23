---
title: 'Fire Alarm System'
slug: '/projects/fire-alarm-system'
date: '2021-07-17'
author: 'Garv Baheti, Bhavishi Bansal'
social: ' | '
socialName: 'garv baheti, bhavishi bansal'
---

## Fire Alarm System

(#garvbaheti, #bhavishibansal)

---

To Interface MSP430 along with Flame Sensor and display output with the help of LCD Display, LED, and Buzzer to make Fire Alarm System and to control the 220V supply with the help of Relay.

### Working

We had designed an automated fire alarm system with the help of MSP430 Lunchbox which can be used to detect fire at any area. This is intended to caution us with the assistance of Buzzer sound, LED and LCD display all together that we will make a move to alert ourselves as well as other people. Also, with the help of Relay we have controlled a 220V Power Supply and made a 220V Bulb Glow, in place of 220V Blub a Fire Extinguisher System can be controlled to Supress Fire.

### Circuit diagram

![lcd](./images/garv1.png)
![lcd](./images/garv2.png)

### Working Model

<iframe width="860" height="515" src="https://www.youtube.com/embed/Y8gq0h-8_yQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Code

> Get complete project at [@Stool Softwares](https://github.com/Stool-Softwares)

```c
// fire-alarm-system.c
#include <msp430.h>
#include <inttypes.h>
#include<stdio.h>

#define CMD 0
#define DATA 1
#define LCD_OUT P1OUT
#define LCD_DIR P1DIR
#define D4 BIT4
#define D5 BIT5
#define D6 BIT6
#define D7 BIT7
#define RS BIT2
#define EN BIT3
#define SW BIT0
#define LED BIT1

/**
*@brief Delay function for producing delay in 0.1 ms increments
*@param t milliseconds to be delayed
*@return void

**/
void delay(uint16_t t) {
    uint16_t i;
    for (i = t; i > 0; i--)
        __delay_cycles(100);
}

/**
*@brief Function to pulse EN pin after data is written
*@return void
**/
void pulseEN(void)
{
    LCD_OUT |= EN; // Giving a falling edge at EN pin
    delay(1);
    LCD_OUT &= ~EN;
    delay(1);
}
/**
*@brief Function to write data/command to LCD
*@param value Value to be written to LED
*@param mode Mode -> Command or Data
*@return void
**/
void lcd_write(uint8_t value, uint8_t mode)
{
    if (mode == CMD)
        LCD_OUT &= ~RS; // Set RS -> LOW for Command mode
    else
        LCD_OUT |= RS; // Set RS -> HIGH for Data mode
    LCD_OUT = ((LCD_OUT & 0x0F) | (value & 0xF0)); // Write high nibble first
    pulseEN();
    delay(1);
    LCD_OUT = ((LCD_OUT & 0x0F) | ((value << 4) & 0xF0)); // Write low nibble next
    pulseEN();
    delay(1);
}
/**
*@brief Function to print a string on LCD
*@param *s pointer to the character to be written.
*@return void
**/
void lcd_print(char * s)
{
    while ( * s)
    {
        lcd_write( * s, DATA);
        s++;
    }
}

/**
*@brief Function to move cursor to desired position on LCD
*@param row Row Cursor of the LCD
*@param col Column Cursor of the LCD
*@return void
**/
void lcd_setCursor(uint8_t row, uint8_t col)
{
    const uint8_t row_offsets[] = {
        0x00,
        0x40
    };
    lcd_write(0x80 | (col + row_offsets[row]), CMD);
    delay(1);
}

/**
*@brief Initialize LCD
**/
void lcd_init()
{
    LCD_DIR |= (D4 + D5 + D6 + D7 + RS + EN);
    LCD_OUT &= ~(D4 + D5 + D6 + D7 + RS + EN);
    delay(150); // Wait for power up ( 15ms )
    lcd_write(0x33, CMD); // Initialization Sequence 1
    delay(50); // Wait ( 4.1 ms )
    lcd_write(0x32, CMD); // Initialization Sequence 2
    delay(1); // Wait ( 100 us )
    // All subsequent commands take 40 us to execute, except clear & cursor return (1.64 ms)
    lcd_write(0x28, CMD); // 4 bit mode, 2 line
    delay(1);
    lcd_write(0x0C, CMD); // Display ON, Cursor OFF, Blink OFF
    delay(1);
    lcd_write(0x01, CMD); // Clear screen
    delay(20);
    lcd_write(0x06, CMD); // Auto Increment Cursor
    delay(1);
    lcd_setCursor(0, 0); // Goto Row 1 Column 1
}
/**
* @brief
* These settings are wrt enabling ADC10 on Lunchbox
**/
void main(void) {
    WDTCTL = WDTPW | WDTHOLD; //! Stop Watchdog (Not recommended for code in production and devices working in field)
    lcd_init();
    P1DIR |= BIT1; // Set LED pin -> Output
    P1DIR &= ~SW; // Set SW pin -> Input
    while (1)
    {
        if ((P1IN & SW)) // If Output of IR Sensor and P!IN is low
        {
            lcd_setCursor(0, 0); // Set the cursor in the LCD
            lcd_print("Current Status"); // Printing this command
            lcd_setCursor(1, 0); // Set the cursor in the LCD
            lcd_print("----NO FIRE---"); // Printing this command
        } else { // If Output is high
            P1DIR |= BIT1; // Set as input
            delay(5000);
            lcd_setCursor(0, 0); // Set the cursor in the LCD
            lcd_print("Current Status"); // Printing this command
            lcd_setCursor(1, 0); // Set the cursor in the LCD
            lcd_print("!!FIRE ALERT!!"); // Printing this command
        }
        P1DIR &= ~BIT1; // Set as Input
    }
}
```
