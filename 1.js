const studentsProgress = [
    { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
    { name: "Sita", completedLessons: 25, totalLessons: 50 },
    { name: "Manoj", completedLessons: 30, totalLessons: 60 },
    { name: "Pooja", completedLessons: 48, totalLessons: 50 },
    { name: "Anil", completedLessons: 15, totalLessons: 50 }
  ];
  
  const activeStudents = studentsProgress.filter(student => student.completedLessons / student.totalLessons >= 0.5);
  const completionPercentages = activeStudents.map(student => (student.completedLessons / student.totalLessons) * 100);
  const averageCompletionPercentage = completionPercentages.reduce((sum, percentage) => sum + percentage, 0) / completionPercentages.length;
  const topLearners = activeStudents.filter(student => (student.completedLessons / student.totalLessons) * 100 > 80);
  console.log(activeStudents)
  console.log(completionPercentages)
  console.log(averageCompletionPercentage)
  console.log(topLearners)
  