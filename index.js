// Your code here
const hourlyRate = 70; 
function calculateWages(startDateStr, endDateStr, hourlyRate) {
    // Parse the date strings to Date objects
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
  
    // Calculate the time difference in milliseconds
    const timeDifference = endDate - startDate;
  
    // Calculate the number of days worked
    const daysWorked = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    console.log(`Days Worked: ${daysWorked}`);

    // Calculate the number of hours worked
    const hoursWorked = (timeDifference / (1000 * 60 * 60)) % 24;
    console.log(`Hours Worked: ${hoursWorked}`);

    // Calculate the total wages
    const totalWages = hoursWorked * hourlyRate;
    console.log(`Total Wages: ${totalWages}`);
}

calculateWages('2023-10-01T08:00:00','2023-10-07T17:30:00',hourlyRate)

   /* return {
      hoursWorked: hoursWorked,
      daysWorked: daysWorked,
      totalWages: totalWages,
    };
    
  
  
  // Example usage:
  const startDateStr = '2023-10-01T08:00:00'; // Start date and time
  const endDateStr = '2023-10-07T17:30:00';   // End date and time
                        // Hourly rate in dollars
  
  const result = calculateWages(startDateStr, endDateStr, hourlyRate);
  console.log(`Hours Worked: ${result.hoursWorked}`);
  console.log(`Days Worked: ${result.daysWorked}`);
  console.log(`Total Wages: $${result.totalWages}`);
  */