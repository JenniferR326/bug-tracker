import bugModel from "../models/bugModel";

export function retrieveBugs() {
  let data = [];

  data.push(
    new bugModel({
      _id: 23456789,
      name: "Crash on Load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "V2.0",
      assigned: "Keisha Rosenblatt",
      creator: "Bill Ryans",
      priority: 1,
      time: "11:38",
    })
  );
  data.push(
    new bugModel({
      _id: 23452789,
      name: "Won't Load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "V2.0",
      assigned: "Keisha Rosenblatt",
      creator: "Bill Ryans",
      priority: 3,
      time: "11:40",
    })
  );
  data.push(
    new bugModel({
      _id: 23456789,
      name: "Crash on Load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "V2.0",
      assigned: "Keisha Rosenblatt",
      creator: "Bill Ryans",
      priority: 2,
      time: "2:38",
    })
  );
  data.push(
    new bugModel({
      _id: 23452789,
      name: "Won't Load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "V2.0",
      assigned: "Keisha Rosenblatt",
      creator: "Bill Ryans",
      priority: 1,
      time: "12:40",
    })
  );

  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });
  return sorted;
}
