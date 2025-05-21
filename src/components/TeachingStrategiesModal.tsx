import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./TeachingStrategiesModal.css";

interface TeachingStrategiesModalProps {
  show: boolean;
  onHide: () => void;
}

// Define the teaching strategies from the README
const strategies = [
  {
    title: "Deep Dive: Number Talks in the Game",
    content: (
      <>
        <p>
          A <strong>number talk</strong> is a short, focused conversation around
          mental math that surfaces students' thinking, celebrates multiple
          strategies, and builds number sense. Pairing a number talk with each
          match makes every turn a mini-lesson:
        </p>
        <ol>
          <li>
            <strong>Set the Stage</strong>
            <br />
            After a match is found, pause the game and say:
            <blockquote>
              "Let's pause—numbers are awesome, and I want to hear your brain in
              action."
              <br />
              Pose a clear question, e.g., "Can you walk me through, step by
              step, how you know these two numbers make 10?"
            </blockquote>
          </li>
          <li>
            <strong>Elicit Multiple Strategies</strong>
            <br />
            Invite responses without judgment:
            <blockquote>
              "Who has one way they see 4 and 6 making 10?"
              <br />
              Record their mental shortcuts exactly as said:
              <ul>
                <li>
                  Student A: "I saw 4 up to 5 (+1), then 5 to 10 (+5), so +1 +5
                  = +6."
                </li>
              </ul>
            </blockquote>
          </li>
          <li>
            <strong>Connect Talk to Number Sentences</strong>
            <br />
            Transition:
            <blockquote>
              "All those ways are cool. Now let's turn them into number
              sentences so we can <em>see</em> them on paper."
              <br />
              Model the equation:
              <br />
              "You said +1 then +5. That's <code>4 + 1 + 5 = 10</code>, which
              simplifies to <code>4 + 6 = 10</code>."
            </blockquote>
          </li>
          <li>
            <strong>Surface the Fact Family</strong>
            <br />
            Flip the talk:
            <blockquote>
              "We wrote <code>4 + 6 = 10</code>. What if I start at 10 and want
              to get to 4? Are we adding or subtracting?"
              <br />
              Lead them to <code>10 – 6 = 4</code> (or <code>10 – 4 = 6</code>).
            </blockquote>
          </li>
          <li>
            <strong>Use Precise Teacher Moves</strong>
            <ul>
              <li>
                <strong>Revoice:</strong> "Jamie said, 'I jumped by 2.' So you
                went from 3 to 5, then 5 to 10?"
              </li>
              <li>
                <strong>Press:</strong> "Can you tell me another way? Explain it
                like you're teaching a friend."
              </li>
            </ul>
          </li>
          <li>
            <strong>Anchor the Learning</strong>
            <br />
            Have students write both sentences:
            <pre>4 + 6 = 10 10 – 6 = 4</pre>
            Prompt reflection:
            <blockquote>
              "Why do you think subtraction undoes addition? How could that help
              next time you see a tricky sum?"
            </blockquote>
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Enhanced Number Sentence Strategy",
    content: (
      <>
        <ol>
          <li>
            <strong>Prompt the Big Picture</strong>
            <br />
            "When you see 3 and 7 together, what total do they make, and can you
            walk me through how you know that?"
          </li>
          <li>
            <strong>Translate Talk → Equation (Number Sentence)</strong>
            <br />
            Child: "I put 3 and then 7 to make 10." <br />
            You write: <code>3 + 7 = 10</code>.
          </li>
          <li>
            <strong>Flip It</strong>
            <br />
            "If we start with 10 and take away 7, what's left? Is that adding or
            subtracting?"
            <br />
            Guide: "Taking away is subtracting. So <code>10 – 7 = 3</code>."
          </li>
          <li>
            <strong>Notice Question</strong>
            <br />
            "What jumps out at you about <code>3 + 7 = 10</code> and{" "}
            <code>10 – 7 = 3</code>? How are they linked?"
          </li>
          <li>
            <strong>Extend</strong>
            <ul>
              <li>
                <strong>Challenge:</strong> "Can you make <code>7 + 3</code>?
                How about <code>10 – 3</code>?"
              </li>
              <li>
                <strong>Connect:</strong> "This is the same fact family—three
                number sentences all holding hands."
              </li>
            </ul>
          </li>
          <li>
            <strong>Generalize</strong>
            <br />
            Later in the game, choose a new pair and ask:
            <blockquote>
              "Without using counters or fingers, how could you write number
              sentences that show how these two numbers relate?"
            </blockquote>
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Use Counters to Visualize the Math",
    content: (
      <>
        <p>
          Grab some small objects (counters, coins, Legos, cereal
          pieces—whatever) to represent your target big number (usually 10).
          Then:
        </p>
        <blockquote>
          <strong>"Count the counters. How many do we have?"</strong>
          <br />
          "10"
          <br />
          <strong>
            "Now move 4 of them away. Did we just add or subtract?"
          </strong>
          <br />
          "Add?"
          <br />
          <strong>"Hmm. Did we add more counters or take some away?"</strong>
          <br />
          "We took some away."
          <br />
          <strong>
            "Right. That means we subtracted. Can you write that as a number
            sentence?"
          </strong>
        </blockquote>
        <p>They might write:</p>
        <ul>
          <li>
            <code>10 - 4 = 6</code>
          </li>
        </ul>
        <p>Continue:</p>
        <blockquote>
          <strong>
            "Great! So now we have 6. How many would we need to add to 6 to get
            back to 10?"
          </strong>
          <br />
          <strong>"Can you write that as a number sentence too?"</strong>
          <br />
          <strong>
            "What do you notice about these two number sentences? How are they
            connected?"
          </strong>
        </blockquote>
      </>
    ),
  },
  {
    title: "Fingers Help Too!",
    content: (
      <>
        <p>For sums of 10, fingers are quick and visual:</p>
        <blockquote>
          <strong>
            "Hold up 10 fingers. Put down 6. How many are still up?"
          </strong>
        </blockquote>
        <p>
          Use fingers for fluency and counters when you want them to{" "}
          <em>see</em> parts and wholes.
        </p>
      </>
    ),
  },
  {
    title: "What It's Really About",
    content: (
      <>
        <p>
          The goal of this game isn't to memorize pairs—it's to build{" "}
          <strong>number sense</strong>:
        </p>
        <ul>
          <li>Understanding how numbers fit together</li>
          <li>Recognizing patterns in addition and subtraction</li>
          <li>Feeling confident solving problems in multiple ways</li>
        </ul>
        <p>
          If your child struggles, that means they're <em>learning</em>. The aim
          isn't to give answers—it's to give the <em>tools</em> to understand
          how numbers work.
        </p>
      </>
    ),
  },
];

const TeachingStrategiesModal: React.FC<TeachingStrategiesModalProps> = ({
  show,
  onHide,
}) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Teaching Strategies</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {strategies.map((strategy, index) => (
          <div key={index} className="strategy-section">
            <h5>{strategy.title}</h5>
            {strategy.content}
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TeachingStrategiesModal;
