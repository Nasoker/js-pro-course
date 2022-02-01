const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const getMonth = new Date().getMonth();

export const getWeekDay = (date) => {
  const dayNames = ['Sun','Mon','Tue','Wed','Thi','Fri','Sat'];

  return dayNames[date.getDay()];
}

export const getHours = new Date().getHours();
export const getDate = new Date().getDate();
export const getDayAndFullMonth = monthNames[getMonth];