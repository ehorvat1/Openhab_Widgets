//////////////////////////////////////////////////////////////////////////////////////////////////////
// OpenHAB Rule DSL file rAwattarhelper.js to support bar chart for Awattar prices
// Should run in a cron event every 5 to 60 minutes (at least at full hour)
//
//
// see also Github: https://github.com/ehorvat1/Openhab_Widgets/tree/main
//////////////////////////////////////////////////////////////////////////////////////////////////////
var price_max = 0.0
var price_min = 0.0
var price_today_max = 0.0
var hour_today_max = 0
var time_today_max = "0h - 1h"
var price_today_min = 0.0
var hour_today_min = 0
var time_today_min = "0h - 1h"
var price_tomorrow_max = 0.0
var time_tomorrow_max = "0h - 1h"
var hour_tomorrow_max = 0
var price_tomorrow_min = 0.0
var time_tomorrow_min = "0h - 1h"
var price_scale_max = 0
var price_scale_min = 0
var hour_tomorrow_min = 0
//
var act_hour = 0
var today_string = ""
var tomorrow_string = ""
// 
//
// Date time stuff
//
today_string = now.toLocalDateTime().getDayOfMonth.toString()
today_string = today_string + "." + now.toLocalDateTime().getMonthValue.toString()
today_string = today_string + "." + now.toLocalDateTime().getYear.toString()
aWATTar_Date_today.sendCommand(today_string)  
//
tomorrow_string = now.plusDays(1).toLocalDateTime().getDayOfMonth.toString()
tomorrow_string = tomorrow_string + "." + now.toLocalDateTime().getMonthValue.toString()
tomorrow_string = tomorrow_string + "." + now.toLocalDateTime().getYear.toString()
aWATTar_Date_tomorrow.sendCommand(tomorrow_string)  
//
act_hour = now.toLocalDateTime().getHour
aWATTar_actual_hour.sendCommand(act_hour)  
//
// find highest price for today and set hour_today_max
//
price_today_max = (aWATTar_Stundenpreise_Today00_Totalgross.state as Number).doubleValue
if (price_today_max < (aWATTar_Stundenpreise_Today01_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today01_Totalgross.state as Number).doubleValue hour_today_max = 1 } 
if (price_today_max < (aWATTar_Stundenpreise_Today02_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today02_Totalgross.state as Number).doubleValue hour_today_max = 2 } 
if (price_today_max < (aWATTar_Stundenpreise_Today03_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today03_Totalgross.state as Number).doubleValue hour_today_max = 3 } 
if (price_today_max < (aWATTar_Stundenpreise_Today04_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today04_Totalgross.state as Number).doubleValue hour_today_max = 4 } 
if (price_today_max < (aWATTar_Stundenpreise_Today05_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today05_Totalgross.state as Number).doubleValue hour_today_max = 5 } 
if (price_today_max < (aWATTar_Stundenpreise_Today06_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today06_Totalgross.state as Number).doubleValue hour_today_max = 6 } 
if (price_today_max < (aWATTar_Stundenpreise_Today07_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today07_Totalgross.state as Number).doubleValue hour_today_max = 7 } 
if (price_today_max < (aWATTar_Stundenpreise_Today08_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today08_Totalgross.state as Number).doubleValue hour_today_max = 8 } 
if (price_today_max < (aWATTar_Stundenpreise_Today09_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today09_Totalgross.state as Number).doubleValue hour_today_max = 9 } 
if (price_today_max < (aWATTar_Stundenpreise_Today10_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today10_Totalgross.state as Number).doubleValue hour_today_max = 10 }  
if (price_today_max < (aWATTar_Stundenpreise_Today11_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today11_Totalgross.state as Number).doubleValue hour_today_max = 11 }  
if (price_today_max < (aWATTar_Stundenpreise_Today12_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today12_Totalgross.state as Number).doubleValue hour_today_max = 12 }  
if (price_today_max < (aWATTar_Stundenpreise_Today13_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today13_Totalgross.state as Number).doubleValue hour_today_max = 13 }  
if (price_today_max < (aWATTar_Stundenpreise_Today14_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today14_Totalgross.state as Number).doubleValue hour_today_max = 14 }   
if (price_today_max < (aWATTar_Stundenpreise_Today15_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today15_Totalgross.state as Number).doubleValue hour_today_max = 15 }   
if (price_today_max < (aWATTar_Stundenpreise_Today16_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today16_Totalgross.state as Number).doubleValue hour_today_max = 16 }  
if (price_today_max < (aWATTar_Stundenpreise_Today17_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today17_Totalgross.state as Number).doubleValue hour_today_max = 17 }  
if (price_today_max < (aWATTar_Stundenpreise_Today18_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today18_Totalgross.state as Number).doubleValue hour_today_max = 18 }  
if (price_today_max < (aWATTar_Stundenpreise_Today19_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today19_Totalgross.state as Number).doubleValue hour_today_max = 19 }   
if (price_today_max < (aWATTar_Stundenpreise_Today20_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today20_Totalgross.state as Number).doubleValue hour_today_max = 20 }  
if (price_today_max < (aWATTar_Stundenpreise_Today21_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today21_Totalgross.state as Number).doubleValue hour_today_max = 21 }  
if (price_today_max < (aWATTar_Stundenpreise_Today22_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today22_Totalgross.state as Number).doubleValue hour_today_max = 22 }  
if (price_today_max < (aWATTar_Stundenpreise_Today23_Totalgross.state as Number)) { price_today_max = (aWATTar_Stundenpreise_Today23_Totalgross.state as Number).doubleValue hour_today_max = 23 }  
//
aWATTar_price_today_max.sendCommand(price_today_max)
aWATTar_today_max_hour.sendCommand(hour_today_max)
//
time_today_max = hour_today_max.toString() + " - " + (hour_today_max+1).toString()
aWATTar_time_today_max.sendCommand(time_today_max)
//
//
// find lowest price for today and set hour_today_min
//
price_today_min = (aWATTar_Stundenpreise_Today00_Totalgross.state as Number).doubleValue
if (price_today_min > (aWATTar_Stundenpreise_Today01_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today01_Totalgross.state as Number).doubleValue hour_today_min = 1 }
if (price_today_min > (aWATTar_Stundenpreise_Today02_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today02_Totalgross.state as Number).doubleValue hour_today_min = 2 }
if (price_today_min > (aWATTar_Stundenpreise_Today03_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today03_Totalgross.state as Number).doubleValue hour_today_min = 3 }
if (price_today_min > (aWATTar_Stundenpreise_Today04_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today04_Totalgross.state as Number).doubleValue hour_today_min = 4 }
if (price_today_min > (aWATTar_Stundenpreise_Today05_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today05_Totalgross.state as Number).doubleValue hour_today_min = 4 }
if (price_today_min > (aWATTar_Stundenpreise_Today06_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today06_Totalgross.state as Number).doubleValue hour_today_min = 5 }
if (price_today_min > (aWATTar_Stundenpreise_Today07_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today07_Totalgross.state as Number).doubleValue hour_today_min = 6 }
if (price_today_min > (aWATTar_Stundenpreise_Today08_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today08_Totalgross.state as Number).doubleValue hour_today_min = 7 }
if (price_today_min > (aWATTar_Stundenpreise_Today09_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today09_Totalgross.state as Number).doubleValue hour_today_min = 8 }
if (price_today_min > (aWATTar_Stundenpreise_Today10_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today10_Totalgross.state as Number).doubleValue hour_today_min = 9 }
if (price_today_min > (aWATTar_Stundenpreise_Today11_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today11_Totalgross.state as Number).doubleValue hour_today_min = 10 }
if (price_today_min > (aWATTar_Stundenpreise_Today12_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today12_Totalgross.state as Number).doubleValue hour_today_min = 11 }
if (price_today_min > (aWATTar_Stundenpreise_Today13_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today13_Totalgross.state as Number).doubleValue hour_today_min = 12 }
if (price_today_min > (aWATTar_Stundenpreise_Today14_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today14_Totalgross.state as Number).doubleValue hour_today_min = 13 }
if (price_today_min > (aWATTar_Stundenpreise_Today15_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today15_Totalgross.state as Number).doubleValue hour_today_min = 14 }
if (price_today_min > (aWATTar_Stundenpreise_Today16_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today16_Totalgross.state as Number).doubleValue hour_today_min = 15 }
if (price_today_min > (aWATTar_Stundenpreise_Today17_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today17_Totalgross.state as Number).doubleValue hour_today_min = 16 }
if (price_today_min > (aWATTar_Stundenpreise_Today18_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today18_Totalgross.state as Number).doubleValue hour_today_min = 17 }
if (price_today_min > (aWATTar_Stundenpreise_Today19_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today19_Totalgross.state as Number).doubleValue hour_today_min = 18 }
if (price_today_min > (aWATTar_Stundenpreise_Today20_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today20_Totalgross.state as Number).doubleValue hour_today_min = 20 }
if (price_today_min > (aWATTar_Stundenpreise_Today21_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today21_Totalgross.state as Number).doubleValue hour_today_min = 21 }
if (price_today_min > (aWATTar_Stundenpreise_Today22_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today22_Totalgross.state as Number).doubleValue hour_today_min = 22 }
if (price_today_min > (aWATTar_Stundenpreise_Today23_Totalgross.state as Number)) { price_today_min = (aWATTar_Stundenpreise_Today23_Totalgross.state as Number).doubleValue hour_today_min = 23 }
//
aWATTar_price_today_min.sendCommand(price_today_min)
aWATTar_today_min_hour.sendCommand(hour_today_min)
//
time_today_min = hour_today_min.toString() + " - " + (hour_today_min+1).toString()
aWATTar_time_today_min.sendCommand(time_today_min)
//
//
// find highest price for tomorrow and set hour_tomorrow_max
//
if ((aWATTar_Stundenpreise_Tomorrow00_Totalgross.state != UNDEF && aWATTar_Stundenpreise_Tomorrow00_Totalgross.state != NULL )) { // do not use tomorrow items if not valid (until 14:00)
price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow00_Totalgross.state as Number).doubleValue
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow01_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow01_Totalgross.state as Number).doubleValue hour_tomorrow_max = 1 } 
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow02_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow02_Totalgross.state as Number).doubleValue hour_tomorrow_max = 2 } 
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow03_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow03_Totalgross.state as Number).doubleValue hour_tomorrow_max = 3 } 
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow04_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow04_Totalgross.state as Number).doubleValue hour_tomorrow_max = 4 } 
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow05_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow05_Totalgross.state as Number).doubleValue hour_tomorrow_max = 5 } 
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow06_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow06_Totalgross.state as Number).doubleValue hour_tomorrow_max = 6 } 
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow07_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow07_Totalgross.state as Number).doubleValue hour_tomorrow_max = 7 } 
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow08_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow08_Totalgross.state as Number).doubleValue hour_tomorrow_max = 8 } 
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow09_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow09_Totalgross.state as Number).doubleValue hour_tomorrow_max = 9 } 
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow10_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow10_Totalgross.state as Number).doubleValue hour_tomorrow_max = 10 }  
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow11_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow11_Totalgross.state as Number).doubleValue hour_tomorrow_max = 11 }  
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow12_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow12_Totalgross.state as Number).doubleValue hour_tomorrow_max = 12 }  
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow13_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow13_Totalgross.state as Number).doubleValue hour_tomorrow_max = 13 }  
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow14_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow14_Totalgross.state as Number).doubleValue hour_tomorrow_max = 14 }   
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow15_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow15_Totalgross.state as Number).doubleValue hour_tomorrow_max = 15 }   
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow16_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow16_Totalgross.state as Number).doubleValue hour_tomorrow_max = 16 }  
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow17_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow17_Totalgross.state as Number).doubleValue hour_tomorrow_max = 17 }  
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow18_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow18_Totalgross.state as Number).doubleValue hour_tomorrow_max = 18 }  
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow19_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow19_Totalgross.state as Number).doubleValue hour_tomorrow_max = 19 }   
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow20_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow20_Totalgross.state as Number).doubleValue hour_tomorrow_max = 20 }  
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow21_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow21_Totalgross.state as Number).doubleValue hour_tomorrow_max = 21 }  
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow22_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow22_Totalgross.state as Number).doubleValue hour_tomorrow_max = 22 }  
  if (price_tomorrow_max < (aWATTar_Stundenpreise_Tomorrow23_Totalgross.state as Number)) { price_tomorrow_max = (aWATTar_Stundenpreise_Tomorrow23_Totalgross.state as Number).doubleValue hour_tomorrow_max = 23 }  
//
  aWATTar_price_tomorrow_max.sendCommand(price_tomorrow_max)  //send price_tomorrow_max to item 
  aWATTar_tomorrow_max_hour.sendCommand(hour_tomorrow_max)
//
  time_tomorrow_max = hour_tomorrow_max.toString() + " - " + (hour_tomorrow_max+1).toString()
  aWATTar_time_tomorrow_max.sendCommand(time_tomorrow_max)
} else {
  aWATTar_price_tomorrow_max.sendCommand(0)  //Widget widget_aWATTar_tomorrow_eho_v1 will detect "no data" if both items aWATTar_price_tomorrow_max and aWATTar_price_tomorrow_min are 0
}
//
//
// find lowest price for tomorrow and set hour_tomorrow_min
//
if ((aWATTar_Stundenpreise_Tomorrow00_Totalgross.state != UNDEF && aWATTar_Stundenpreise_Tomorrow00_Totalgross.state != NULL )) { // do not use tomorrow items if not valid (until 14:00)
price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow00_Totalgross.state as Number).doubleValue
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow01_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow01_Totalgross.state as Number).doubleValue hour_tomorrow_min = 1 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow02_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow02_Totalgross.state as Number).doubleValue hour_tomorrow_min = 2 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow03_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow03_Totalgross.state as Number).doubleValue hour_tomorrow_min = 3 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow04_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow04_Totalgross.state as Number).doubleValue hour_tomorrow_min = 4 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow05_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow05_Totalgross.state as Number).doubleValue hour_tomorrow_min = 4 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow06_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow06_Totalgross.state as Number).doubleValue hour_tomorrow_min = 5 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow07_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow07_Totalgross.state as Number).doubleValue hour_tomorrow_min = 6 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow08_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow08_Totalgross.state as Number).doubleValue hour_tomorrow_min = 7 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow09_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow09_Totalgross.state as Number).doubleValue hour_tomorrow_min = 8 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow10_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow10_Totalgross.state as Number).doubleValue hour_tomorrow_min = 9 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow11_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow11_Totalgross.state as Number).doubleValue hour_tomorrow_min = 10 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow12_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow12_Totalgross.state as Number).doubleValue hour_tomorrow_min = 11 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow13_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow13_Totalgross.state as Number).doubleValue hour_tomorrow_min = 12 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow14_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow14_Totalgross.state as Number).doubleValue hour_tomorrow_min = 13 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow15_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow15_Totalgross.state as Number).doubleValue hour_tomorrow_min = 14 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow16_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow16_Totalgross.state as Number).doubleValue hour_tomorrow_min = 15 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow17_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow17_Totalgross.state as Number).doubleValue hour_tomorrow_min = 16 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow18_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow18_Totalgross.state as Number).doubleValue hour_tomorrow_min = 17 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow19_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow19_Totalgross.state as Number).doubleValue hour_tomorrow_min = 18 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow20_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow20_Totalgross.state as Number).doubleValue hour_tomorrow_min = 20 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow21_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow21_Totalgross.state as Number).doubleValue hour_tomorrow_min = 21 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow22_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow22_Totalgross.state as Number).doubleValue hour_tomorrow_min = 22 }
  if (price_tomorrow_min > (aWATTar_Stundenpreise_Tomorrow23_Totalgross.state as Number)) { price_tomorrow_min = (aWATTar_Stundenpreise_Tomorrow23_Totalgross.state as Number).doubleValue hour_tomorrow_min = 23 }
//
aWATTar_price_tomorrow_min.sendCommand(price_tomorrow_min) //send price_tomorrow_min to item 
aWATTar_tomorrow_min_hour.sendCommand(hour_tomorrow_min)
//
time_tomorrow_min = hour_tomorrow_min.toString() + " - " + (hour_tomorrow_min+1).toString()
aWATTar_time_tomorrow_min.sendCommand(time_tomorrow_min)
//
} else {
  aWATTar_price_tomorrow_min.sendCommand(0)  //Widget widget_aWATTar_tomorrow_eho_v1 will detect "no data" if both items aWATTar_price_tomorrow_max and aWATTar_price_tomorrow_min are 0
}  
//
if (price_today_max < price_tomorrow_max) { price_max = price_tomorrow_max } else { price_max = price_today_max }
if (price_today_min > price_tomorrow_min) { price_min = price_tomorrow_min }  else { price_min = price_today_min }
//
aWATTar_price_max.sendCommand(price_max)
aWATTar_price_min.sendCommand(price_min)
//
// calculate the max to min for price scale (should be dividable by 4)
//
if (price_min > 0.0) {
  price_scale_max = ((price_max/4).intValue * 4) + 4
  price_scale_min = 0
} else {
  price_scale_max = ((price_max/4).intValue * 4) + 4
  price_scale_min = (((price_min)/4).intValue * 4) - 4    
}
//
aWATTar_price_scale_min.sendCommand(price_scale_min)
aWATTar_price_scale_max.sendCommand(price_scale_max)
//
aWATTar_price_scale_0.sendCommand(price_scale_min)
aWATTar_price_scale_25.sendCommand((((price_scale_max - price_scale_min) * 0.25) + price_scale_min).intValue)
aWATTar_price_scale_50.sendCommand((((price_scale_max - price_scale_min) * 0.5) + price_scale_min).intValue)
aWATTar_price_scale_75.sendCommand((((price_scale_max - price_scale_min) * 0.75) + price_scale_min).intValue)
aWATTar_price_scale_100.sendCommand(price_scale_max)
//
aWATTar_price_scale_factor.sendCommand(87.0 / (price_scale_max - price_scale_min))  //Constant must include a decimal point !
//
logInfo("Rule rAwattarhelper", "Rule rAwattarhelper was running at: {}", now.toLocalDateTime().toString())
//
// End of rAwattarhelper.js
