# Lesson 5 Clean and summarize the records

Open [Unit04_L05_Start.xlsx](unit04-lesson05-student.xlsx).

1. Compare the nine raw records with the eight rows in Analysis. Identify the exact duplicate. Keep the raw records.
2. Check that weekends 1–8 are in source order. Clean the Day labels with TRIM and PROPER.
3. Use COUNT on RawPOS[Weekend] and CleanPOS[Weekend]. The results are 9 and 8.
4. Use AVERAGE, MEDIAN, and STDEV.S on the eight order counts. Divide total wasted units by total prepared units for the historical waste rate.

In Analysis C6, enter `=PROPER(TRIM(INDEX(RawPOS[Day text],CleanPOS[[#This Row],[Weekend]])))`. Fill to C13. In B16:B17, count the two numeric Weekend columns. Keep the numeric clean rows supplied in the file.
