See also: https://community.openhab.org/t/oh3-livio-energy-summary-animated/136420/22


Base Version v1:
Is a modified version of the energy summary widget by MikeTheTux_3. The main change is that (most) colors and background colors are now included as widget properties.

A (maybe not complete) list of changes to version OH3_Livio_Energy_Summary_MikeTheTux_3 :

1) Introduced individual Colors and Background for every Item and block
2) Removed arrow right and “-” from Home Consumption
3) Item itemHomeConsumption2 designed to show now “Import kWh” , added arrow right
4) Item itemHomeConsumption3 designed to show now “Export kWh” , added arrow left
5) Removed “-” from Export to Grid
6) Removed “arrow_up” and “-” from Export to Car
7) Import line from grid visible if import itemProductionFromGrid is > 0 (was =0)
8) Changed Icon for Water to water-thermometer (was water)
9) Default color for NonFossile to darkred (was red)
10) Icon for Water changed to “Flame” visible when WaterItem > 5
11) Moved lines for Solar and Grid a bit down (moving circle was not on the line in my setup)
      Sotherefore: path1 now M53,0 v15 c0,27 10,36 30,36 h20 (was M53,0 v15 c0,27 10,32 30,32 h20)
                   path2 now M47,0 v15 c0,27 -10,36 -30,36 h-20 (was M47,0 v15 c0,27 -10,32 -30,32 h-20)
                   path3 now M0,54 H100 (was M0,50 H100)
12) Gauge in the middle shows now just an individual Item: itemSelfConsumption and a configurable ItemName. No color changes here any more.

in v2, Changes to v1 :
1) Animations (except for Battery) are now changing in size and speed, depending on their representing value. Search for “.state)” in the code to see how its done.
2) Border width of the blocks set to 2px
3) Battery animation. Charging animation visible if ItemBattery is negative. Decharging (towards house) visible if ItemBattery is positive.
                       Search for “(@props.itemBattery) < 0)” and “(@props.itemBattery) > 0)” in the code to find how/where this is done.


in v3, Changes to v2: 
1) added a 2nd Item to Non Fossile Block. 31.Mar 2024
2) removed arrow icon in solar block. 30.Jun 2024
3) Power animation from solar to house corrected.
4) Battery animation modified. Follows now itemBattery2 which should be linked to Battery charging/discharging power (showing charging when > 0, Discharging if < 0).
