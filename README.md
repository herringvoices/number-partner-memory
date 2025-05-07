# Number Partner Memory

A fun and interactive memory card matching game built with React, TypeScript, and Vite.

## Game Rules

1. The game starts with all cards face down.
2. Players flip two cards on each turn.
3. If the two flipped cards match (have the same number), the player scores a point and the cards remain flipped.
4. If the cards do not match, they are flipped back face down.
5. The game continues until all pairs have been matched.
6. Try to complete the game in the fewest number of moves!

## Features

* Responsive design that works on desktop and mobile devices
* Beautiful animations for card flipping and matching
* Score tracking
* Victory message when all pairs are found

## Installation

### Prerequisites

* Node.js (v18 or later recommended)
* npm (v9 or later recommended)

### Setup

1. Clone the repository:

2) Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173/` (or the port shown in your terminal).

## Building for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Technologies Used

* React 19
* TypeScript
* Vite
* React Bootstrap
* CSS Animations

## Project Structure

* `src/components/` - React components including Card, GameBoard, GameSetup, and VictoryMessage
* `src/assets/` - Static assets like images
* `public/` - Public assets including the card back image

## Teaching with Number Partner Memory

I originally made this game when I was teaching 1st grade. I had students who were struggling to understand **number partners**—pairs of numbers that go together to make a bigger number, like 2 and 8 making 10.

This game was my way of helping them *see* the math, not just memorize it. If you're using this with your own child or students, here are a few tips that can make it a powerful math learning tool:

### Deep Dive: Number Talks in the Game

A **number talk** is a short, focused conversation around mental math that surfaces students’ thinking, celebrates multiple strategies, and builds number sense. Pairing a number talk with each match makes every turn a mini-lesson:

1. **Set the Stage**
   After a match is found, pause the game and say:

   > “Let’s pause—numbers are awesome, and I want to hear your brain in action.”
   > Pose a clear question, e.g., “Can you walk me through, step by step, how you know these two numbers make 10?”

2. **Elicit Multiple Strategies**
   Invite responses without judgment:

   > “Who has one way they see 4 and 6 making 10?”
   > Record their mental shortcuts exactly as said:

   * Student A: “I saw 4 up to 5 (+1), then 5 to 10 (+5), so +1 +5 = +6.”

3. **Connect Talk to Number Sentences**
   Transition:

   > “All those ways are cool. Now let’s turn them into number sentences so we can *see* them on paper.”
   > Model the equation:
   > “You said +1 then +5. That’s `4 + 1 + 5 = 10`, which simplifies to `4 + 6 = 10`.”

4. **Surface the Fact Family**
   Flip the talk:

   > “We wrote `4 + 6 = 10`. What if I start at 10 and want to get to 4? Are we adding or subtracting?”
   > Lead them to `10 – 6 = 4` (or `10 – 4 = 6`).

5. **Use Precise Teacher Moves**

   * **Revoice:** “Jamie said, ‘I jumped by 2.’ So you went from 3 to 5, then 5 to 10?”
   * **Press:** “Can you tell me another way? Explain it like you’re teaching a friend.”

6. **Anchor the Learning**
   Have students write both sentences:

   ```
   4 + 6 = 10  
   10 – 6 = 4  
   ```

   Prompt reflection:

   > “Why do you think subtraction undoes addition? How could that help next time you see a tricky sum?”

### 🧠 Enhanced Number Sentence Strategy

After your child finds a matching pair (like 3 and 7), guide each step explicitly:

1. **Prompt the Big Picture**

   > “When you see 3 and 7 together, what total do they make, and can you walk me through how you know that?”

2. **Translate Talk → Equation (Number Sentence)**

   * Child: “I put 3 and then 7 to make 10.”
   * You write: `3 + 7 = 10`.

3. **Flip It**

   > “If we start with 10 and take away 7, what’s left? Is that adding or subtracting?”
   > Guide: “Taking away is subtracting. So `10 – 7 = 3`.”

4. **Notice Question**

   > “What jumps out at you about `3 + 7 = 10` and `10 – 7 = 3`? How are they linked?”

5. **Extend**

   * **Challenge:** “Can you make `7 + 3`? How about `10 – 3`?”
   * **Connect:** “This is the same fact family—three number sentences all holding hands.”

6. **Generalize**
   Later in the game, choose a new pair and ask:

   > “Without using counters or fingers, how could you write number sentences that show how these two numbers relate?”

### 🎲 Use Counters to Visualize the Math

Grab some small objects (counters, coins, Legos, cereal pieces—whatever) to represent your target big number (usually 10). Then:

> **"Count the counters. How many do we have?"**
> "10"
> **"Now move 4 of them away. Did we just add or subtract?"**
> "Add?"
> **"Hmm. Did we *********************************************add********************************************* more counters or take some away?"**
> "We took some away."
> **"Right. That means we *********************************************subtracted*********************************************. Can you write that as a number sentence?"**

They might write:

* `10 - 4 = 6`

Continue:

> **"Great! So now we have 6. How many would we need to *********************************************add********************************************* to 6 to get back to 10?"**
> **"Can you write *********************************************that********************************************* as a number sentence too?"**
> **"What do you notice about these two number sentences? How are they connected?"**

### ✋ Fingers Help Too!

For sums of 10, fingers are quick and visual:

> **"Hold up 10 fingers. Put down 6. How many are still up?"**

Use fingers for fluency and counters when you want them to *see* parts and wholes.

### 🎯 What It’s Really About

The goal of this game isn’t to memorize pairs—it’s to build **number sense**:

* Understanding how numbers fit together
* Recognizing patterns in addition and subtraction
* Feeling confident solving problems in multiple ways

If your child struggles, that means they’re *learning*. The aim isn’t to give answers—it’s to give the *tools* to understand how numbers work.

##

## Acknowledgments

* Font: Cabin Sketch from Google Fonts
