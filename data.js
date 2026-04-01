// data.js — All exercise data for Physique Program

const EXERCISES = {
  back: [
    {
      name: "Lat Pulldown / Pull-ups",
      sets: "4 × 8–12 reps",
      desc: "Builds lat width — foundation of the V-taper",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif"
    },
    {
      name: "Barbell Row",
      sets: "4 × 6–10 reps",
      desc: "Adds back thickness & raw pulling strength",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif"
    },
    {
      name: "Seated Cable Row",
      sets: "3 × 10–12 reps",
      desc: "Mid-back detail & posture improvement",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif"
    },
    {
      name: "One-Arm Dumbbell Row",
      sets: "3 × 10–12 reps",
      desc: "Corrects left-right strength imbalances",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif"
    },
    {
      name: "Straight-Arm Pulldown",
      sets: "3 × 12–15 reps",
      desc: "Lat isolation & mind-muscle connection",
      gif: "https://www.inspireusafoundation.org/wp-content/uploads/2024/01/rope-straight-arm-pulldown.gif"
    },
    {
      name: "Deadlift",
      sets: "2 × 5–6 reps",
      desc: "Total back + spinal strength, king of all lifts",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif"
    }
  ],

  biceps: [
    {
      name: "Barbell Curl",
      sets: "4 × 8–12 reps",
      desc: "Overall biceps mass builder",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif"
    },
    {
      name: "Incline Dumbbell Curl",
      sets: "3 × 10–12 reps",
      desc: "Long-head stretch for peak development",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Flexor-Incline-Dumbbell-Curls.gif"
    },
    {
      name: "Hammer Curl",
      sets: "3 × 10–12 reps",
      desc: "Brachialis activation for thicker arms",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif"
    },
    {
      name: "Preacher Curl",
      sets: "3 × 12–15 reps",
      desc: "Short-head isolation & peak definition",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Preacher-Curl.gif"
    },
    {
      name: "Cable Curl",
      sets: "2 × 15 reps",
      desc: "Constant tension finisher & pump",
      gif: "https://www.aleanlife.com/wp-content/uploads/2022/04/reverse-cable-curls.gif"
    }
  ],

  chest: [
    {
      name: "Incline Dumbbell Press",
      sets: "4 × 8–10 reps",
      desc: "Upper chest thickness & shoulder stability",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif"
    },
    {
      name: "Flat Barbell Bench Press",
      sets: "4 × 5–8 reps",
      desc: "Primary strength & overall mass builder",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif"
    },
    {
      name: "Flat Dumbbell Press",
      sets: "3 × 8–12 reps",
      desc: "Deep stretch for better fiber activation",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif"
    },
    {
      name: "Pec Deck / Butterfly",
      sets: "3 × 12–15 reps",
      desc: "Inner chest squeeze & shape",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif"
    },
    {
      name: "Cable Fly (Low → High)",
      sets: "3 × 12–15 reps",
      desc: "Upper-inner definition + pump",
      gif: "https://fitliferegime.com/wp-content/uploads/2023/06/High-To-Low-Cable-fly.gif"
    },
    {
      name: "Dumbbell Pullover",
      sets: "2 × 12–15 reps",
      desc: "Chest expansion & rib-cage stretch",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Pullover.gif"
    }
  ],

  triceps: [
    {
      name: "Close-Grip Bench Press",
      sets: "4 × 6–8 reps",
      desc: "Triceps mass & compound strength",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif"
    },
    {
      name: "Triceps Pushdown",
      sets: "3 × 10–12 reps",
      desc: "Lateral head thickness",
      gif: "https://www.inspireusafoundation.org/wp-content/uploads/2023/03/straight-bar-tricep-pushdown.gif"
    },
    {
      name: "Skull Crushers",
      sets: "3 × 8–10 reps",
      desc: "Long head overload for max size",
      gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/08/flat-bench-skull-crusher.gif"
    },
    {
      name: "Overhead DB Extension",
      sets: "3 × 12–15 reps",
      desc: "Long-head stretch & growth",
      gif: "https://fitliferegime.com/wp-content/uploads/2023/07/Seated-Dumbbell-Overhead-Tricep-Extension.gif"
    },
    {
      name: "Bench Dips",
      sets: "2 × max reps",
      desc: "Finisher & pump",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bench-Dips.gif"
    }
  ],

  shoulders: [
    {
      name: "Overhead Barbell Press",
      sets: "4 × 6–8 reps",
      desc: "Front delts + shoulder strength foundation",
      gif: "https://fitliferegime.com/wp-content/uploads/2023/08/Overhead-Press.gif"
    },
    {
      name: "Dumbbell Shoulder Press",
      sets: "3 × 8–10 reps",
      desc: "Balanced delt growth",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif"
    },
    {
      name: "Lateral Raises",
      sets: "4 × 12–15 reps",
      desc: "Wide shoulder caps & width illusion",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif"
    },
    {
      name: "Rear Delt Fly",
      sets: "3 × 12–15 reps",
      desc: "Rear shoulder & posture balance",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif"
    },
    {
      name: "Front Raise",
      sets: "2 × 12 reps",
      desc: "Front delt finishing movement",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Front-Raise.gif"
    },
    {
      name: "Barbell Shrugs",
      sets: "3 × 12–15 reps",
      desc: "Upper traps thickness",
      gif: "https://fitliferegime.com/wp-content/uploads/2023/06/Barbell-Shrug-1.gif"
    }
  ],

  legs: [
    {
      name: "Barbell Squats",
      sets: "4 × 6–10 reps",
      desc: "Total leg mass & hormone response",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif"
    },
    {
      name: "Leg Press",
      sets: "4 × 10–12 reps",
      desc: "Quad thickness & volume",
      gif: "https://i.pinimg.com/originals/60/fb/4a/60fb4a02b481d7a1b71fbb1795d6109b.gif"
    },
    {
      name: "Leg Curl",
      sets: "3 × 12–15 reps",
      desc: "Hamstrings isolation",
      gif: "https://static.wixstatic.com/media/2edbed_c3fbc7919ae24bc5b7ddee0b98c9ac4e~mv2.gif"
    },
    {
      name: "Leg Extension",
      sets: "3 × 12–15 reps",
      desc: "Quad separation & definition",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif"
    },
    {
      name: "Walking Lunges",
      sets: "2 × 20 steps",
      desc: "Glutes + balance & stability",
      gif: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-walking-lunges.gif"
    },
    {
      name: "Standing Calf Raise",
      sets: "4 × 15–20 reps",
      desc: "Calf hypertrophy",
      gif: "https://www.inspireusafoundation.org/wp-content/uploads/2023/03/dumbbell-calf-raise.gif"
    }
  ]
};

// Map day numbers to data keys
const DAY_MAP = {
  1: 'back',
  2: 'biceps',
  3: 'chest',
  4: 'triceps',
  5: 'shoulders',
  6: 'legs'
};
