export interface StudentAttendance {
  rollNo: number;
  name: string;
  className: string;
  attendance: Record<number, "P" | "A" | "L" | "H" | "">;
}

export const DEFAULT_STUDENT_NAMES: string[] = [
  "Aarav Sharma", "Aditi Rao", "Aditya Verma", "Akash Gupta", "Ananya Singh",
  "Ankit Patel", "Anushka Mishra", "Arjun Nair", "Arnav Mehra", "Ayush Choudhary",
  "Bhavna Joshi", "Chetan Kumar", "Deepak Yadav", "Devansh Thakur", "Divya Malhotra",
  "Diya Kapoor", "Gaurav Sen", "Harsh Vardhan", "Isha Deshmukh", "Ishaan Bhatia",
  "Jatin Sethi", "Karan Johar", "Khushi Agarwal", "Kiran Rawat", "Krishna Murthy",
  "Kunal Saxena", "Lakshya Mittal", "Madhav Kulkarni", "Manish Tiwari", "Mayank Jain",
  "Meera Pillai", "Mohit Chauhan", "Muskan Goyal", "Nakul Sengupta", "Nandini Rathi",
  "Navya Hegde", "Neeraj Chopra", "Nikhil Bansal", "Nisha Das", "Nitin Pandey",
  "Pallavi Shinde", "Pankaj Tripathi", "Pari Singhania", "Pooja Varma", "Pranav Anand",
  "Prateek Dubey", "Priya Nair", "Rahul Roy", "Rajesh Khanna", "Rashi Tyagi",
  "Ravi Teja", "Rhea Pillai", "Rishabh Pant", "Ritika Roy", "Rohan Joshi",
  "Rohit Sharma", "Ruchi Bhatt", "Sachin Patil", "Sahil Grover", "Sakshi Malik",
  "Samar Pratap", "Sameer Khan", "Sandhya Rao", "Sanjay Dutt", "Sanya Mirza",
  "Saurabh Shukla", "Shalini Verma", "Shivam Dube", "Shivani Tomar", "Shreya Ghoshal",
  "Shubham Gill", "Siddharth Malhotra", "Simran Kaur", "Sneha Reddy", "Sohail Ali",
  "Sonali Bendre", "Sparsh Shah", "Srishti Arya", "Subhash Bose", "Sudhir Mishra",
  "Sumit Kumar", "Sunil Gavaskar", "Suraj Sharma", "Suresh Raina", "Swati Mohan",
  "Tanmay Bhat", "Tanvi Shah", "Tarun Tahiliani", "Tejaswini Sawant", "Uday Chopra",
  "Umang Singhal", "Upasana Kamineni", "Utkarsh Ambudkar", "Vaibhav Suryavanshi", "Vaishnavi Rao",
  "Varun Dhawan", "Vedant Madhavan", "Vikas Khanna", "Vishal Dadlani", "Yashasvi Jaiswal"
];

export function generate100Students(fillSample: boolean = false): StudentAttendance[] {
  return Array.from({ length: 100 }, (_, index) => {
    const rollNo = index + 1;
    const name = DEFAULT_STUDENT_NAMES[index] || `Student ${rollNo}`;
    const attendance: Record<number, "P" | "A" | "L" | "H" | ""> = {};

    for (let day = 1; day <= 31; day++) {
      if (fillSample) {
        // Sample realistic pattern: Sundays are H (days 1, 8, 15, 22, 29 for sample month)
        if (day % 7 === 1) {
          attendance[day] = "H";
        } else {
          // 85% Present, 10% Absent, 5% Leave
          const rand = (index * 31 + day) % 20;
          if (rand === 0) attendance[day] = "A";
          else if (rand === 1) attendance[day] = "L";
          else attendance[day] = "P";
        }
      } else {
        attendance[day] = "";
      }
    }

    return {
      rollNo,
      name,
      className: "Class-7 / Sem-1",
      attendance
    };
  });
}

export const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
