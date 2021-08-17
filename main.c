#define CMD 0
#define DATA 1
#define AIN BIT0
#define LCD_OUT P1OUT
#define LCD_DIR P1DIR
#define D4 BIT4
#define D5 BIT5
#define D6 BIT6
#define D7 BIT7
#define RS BIT2
#define EN BIT3
#define LED BIT3
void delay(uint16_t t) {
    uint16_t i;
    for (i = t; i > 0; i--)
        __delay_cycles(100);
}

void pulseEN(void) {
    LCD_OUT |= EN;
    delay(1);
    CD_OUT &= ~EN;
    delay(1);
}

void lcd_write(uint8_t value, uint8_t mode) {
    if (mode == CMD)
        LCD_OUT &= ~RS;
    else LCD_OUT |= RS; LCD_OUT = ((LCD_OUT & 0x0F) | (value & 0xF0)); pulseEN(); delay(1); LCD_OUT = ((LCD_OUT & 0x0F) | ((value << 4) & 0xF0)); pulseEN(); delay(1);
} void lcd_print(char* s) { while (*s) { lcd_write(*s, DATA); s++; } } void lcd_setCursor(uint8_t row, uint8_t col) { const uint8_t row_offsets[] = { 0x00, 0x40 }; lcd_write(0x80 | (col + row_offsets[row]), CMD); delay(1); } void lcd_printNumber(unsigned int num) { char buf[3]; char* str = &buf[2]; *str = '\0'; do { unsigned long m = num; num /= 10; char c = (m - 10 * num) + '0'; *--str = c; } while (num); lcd_print(str); } void lcd_init() { LCD_DIR |= (D4 + D5 + D6 + D7 + RS + EN); LCD_OUT &= ~(D4 + D5 + D6 + D7 + RS + EN); delay(150); lcd_write(0x33, CMD); delay(50); lcd_write(0x32, CMD); delay(1); lcd_write(0x28, CMD); delay(1); lcd_write(0x0C, CMD); delay(1); lcd_write(0x01, CMD); delay(20); lcd_write(0x06, CMD); delay(1); lcd_setCursor(0, 0); } void register_settings_for_ADC10() { ADC10AE0 |= AIN; ADC10CTL1 = INCH_0; ADC10CTL0 = SREF_0 + ADC10SHT_3 + ADC10ON; } /* USER DEFINED FUNCTIONS AND GLOBAL VARIABLE (defined by Aditya Shukla and Arushi Singh) | | | V */ int minute_count = 0; int hour_count = 0; int counting = 0, flag = 0; int record_hour[7], record_minute[7]; void reset_display(void) { lcd_setCursor(0, 3); lcd_print("Stopwatch"); lcd_setCursor(1, 5); lcd_print("00:00"); } void stopwatch(void) { flag = 1; if (minute_count < 10) lcd_setCursor(1, 9); else lcd_setCursor(1, 8); lcd_printNumber(hour_count++); if (counting > 3) delay(30); else if (counting > 5) delay(10); else delay(10000); if (minute_count == 60) { lcd_setCursor(1, 8); lcd_print("00"); minute_count = 0; if (hour_count < 9) lcd_setCursor(1, 6); else lcd_setCursor(1, 5); lcd_printNumber(++hour_count); } } void record_time(void) { record_hour[counting] = hour_count; record_minute[counting++] = minute_count; minute_count = 0; hour_count = 0; flag = 0; } //-----------main starting----------
void main(void) { WDTCTL = WDTPW + WDTHOLD; lcd_init(); register_settings_for_ADC10(); reset_display(); P2DIR |= BIT3; P2OUT &= ~BIT3; while (1) { ADC10CTL0 |= ENC + ADC10SC; while (ADC10CTL1 & ADC10BUSY); float adc_value = 0; adc_value = (ADC10MEM) * (99.00) / (1023.00); if (adc_value > 15.0 && flag == 1) { P2OUT &= ~BIT3; record_time(); reset_display(); } else if (adc_value > 15.0 && flag == 0) { P2OUT &= ~BIT3; reset_display(); } else if (adc_value <= 15.0) { P2OUT |= BIT3; stopwatch(); } if (counting == 7) break; } while (1) { int i; for (i = 0; i < 6; i += 2) { lcd_setCursor(0, 0); lcd_print(" "); lcd_setCursor(1, 0); lcd_print(" "); lcd_setCursor(0, 1); lcd_print("PLoss"); lcd_printNumber(i + 1); lcd_setCursor(1, 1); lcd_printNumber(record_hour[i]); lcd_print(":"); if (record_minute[i] - 1 < 10) lcd_print("0"); lcd_printNumber(record_minute[i] - 1); lcd_setCursor(0, 9); lcd_print("PLoss"); lcd_printNumber(i + 2); lcd_setCursor(1, 9); lcd_printNumber(record_hour[i + 1]); lcd_print(":"); if (record_minute[i + 1] - 1 < 10) lcd_print("0"); lcd_printNumber(record_minute[i + 1] - 1); delay(25000); } lcd_setCursor(0, 0); lcd_print(" "); lcd_setCursor(1, 0); lcd_print(" "); lcd_setCursor(0, 1); lcd_print("PLoss"); lcd_printNumber(7); lcd_setCursor(1, 1); lcd_printNumber(record_hour[6]); lcd_print(":"); if (record_minute[i] - 1 < 10) lcd_print("0"); lcd_printNumber(record_minute[6] - 1); delay(25000); } }