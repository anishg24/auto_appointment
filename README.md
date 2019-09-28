# Auto Appointment Script for FlexTime
Recently our school made the switch to the https://teachmore.org.
The way this program works is that we make appointments for our homerooms instead of the previous freedom that we could go to any homeroom we wanted to.
I personally found this stupid, and a waste of time, as we had to sign up every Wednesday and Thursday to go to a teacher's class. If we didn't sign up, we weren't allowed to go, and we were forced to the cafeteria if we didn't go to any of the classrooms.
Instead of conforming to the idea that I need to register every week, I dug through the source code to find that the app is run off a php file, and the functions to handle everything was neatly included in the file
After dissecting the data, I managed to replicate data strings that can work in their handling methods.
Then I got to work to creating a script that I can run in the console to automatically register myself in a class of my choosing on a weekly basis.
It was at this point that I found out the hard way that FlexTime was smart enough to incorporate a, let's say, "safety measure" in that you can't register for appointments ahead of time unless a certain date was passed (I couldn't register for October 10th unless the current date is October 7th or something)
That discovery was disappointing, but since I was done with the script I anyway published it. Enjoy my 30 minutes of hardwork everyone

# How to Use
1. Copy all the code in the `autoAppointment.js` file
2. Go to your `FlexTime Portal` (with the big calendar)
3. Choose a starting date by clicking on `Date` in the sidebar
4. Choose the teacher you want. **DON'T CLICK SUBMIT**
5. Paste the code you copied into the console (in Inspect Element)
6. Run `makeAppointments(#)` where `#` is the number of appointments
