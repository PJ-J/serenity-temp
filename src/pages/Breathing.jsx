import React from 'react'
import './Breathing.css'
import Footer from '../components/Footer.jsx'

const Breathing = () => {
  let quotesArr = [
    'Quiet the mind and the soul will speak. – Ma Jaya Sati Bhagavati',
    'Meditation is not about stopping thoughts, but recognizing that we are more than our thoughts and our feelings. - Arianna Huffington ',
    'Meditation is like a gym in which you develop the powerful mental muscles of calm and insight. – Ajahn Brahm',
    'When meditation is mastered, the mind is unwavering like the flame of a candle in a windless place — Bhagavad Gita',
    'Be here now. Be someplace later. Is that so complicated? – David M. Bader',
    'The quieter you become, the more you are able to hear – Rumi',
    'Your goal is not to battle with the mind, but to witness the mind. – Swami Muktananda',
  ]
  // let randomValue = quotesArr[Math.floor(Math.random() * quotesArr.length)]
  let quote = quotesArr[Math.floor(Math.random() * quotesArr.length)]

  return (
    <div>
      <div
        style={{ fontFamily: 'Merriweather', color: '#fff' }}
        className="container mt-3"
      >
        <div>
          {/* <div className="boxed">{`Meditative Wisdom: ${quote}`} </div> */}
          <div className="container mb-5">
            <div className="blockquote">
              <h1>{quote}</h1>
              {/* <h4>&mdash;Jared Spool</h4> */}
            </div>
          </div>
          <h2
            style={{
              textShadow:
                '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff',
            }}
            className="text-center"
          >
            Box Breathing
          </h2>

          <div className="breathing-info">
            <p>
              When you begin your meditation journey, you may think to yourself,
              "Where do I start?" Finding a breathing technique that works for
              you is very important for beginners. One of the most popular
              techniques, box breathing, will be instructed on this page.
            </p>
            <p>
              Box breathing is quite easy when you get the hang of it. Here we
              will run through the steps.
            </p>
            <ul>
              <li>
                Step 1: Breathe in counting to four slowly. Feel the air enter
                your lungs.
              </li>
              <li>
                Step 2: Hold your breath for 4 seconds. Try to avoid inhaling or
                exhaling for 4 seconds.
              </li>
              <li>Step 3: Slowly exhale through your mouth for 4 seconds.</li>
              <li>
                Step 4: Hold again for 4 seconds. Repeat steps until you feel
                re-centered.
              </li>
            </ul>
          </div>
          <h5 className="text-center">
            Use the animation below to time the ebb and flow of your breath
            during the exercise.
          </h5>

          <div className="boxHolder d-flex justify-content-center m-4">
            <div id="box">
              <div id="breath"></div>
              <div id="ball"></div>
            </div>
            {/* <img id="boxed-img" src={require('../components/assets/Boxed.png')} /> */}
          </div>
        </div>
        <h2
          style={{
            textShadow:
              '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff',
          }}
          className="text-center"
        >
          Focused Breathing
        </h2>
        <div className="breathing-info">
          <p>
            Now that we have learned about box breathing, let's move on to
            another popular technique, focused breathing. Focused
            breathing is relatively simple and can be broken down into these 6
            steps.
          </p>
          <ul>
            <li>Step 1: Close your eyes</li>
            <li>Step 2: Take a few big, deep breaths.</li>
            <li>Step 3: Breathe in. ...</li>
            <li>Step 4: Breathe out. ...</li>
            <li>
              Step 5: As you breathe out, say in your mind, "I breathe out
              stress and tension."
            </li>
            <li>Step 6: Continue until you feel re-centered.</li>
          </ul>
        </div>

        {/* <div id="focus-image">
        {' '}
        <div id="breathing ">
          <div className="Breath-img d-flex justify-content-center">
            <img
              style={{ height: '500px' }}
              id="breathing-exercise"
              src={require('../components/assets/breathing-exercises.gif')}
            />
          </div>
        </div>
      </div> */}
      </div>
      <Footer />
    </div>
  )
}

// let randomValue = quotesArr[Math.floor(Math.random() * myArray.length)];
// let quote = quotesArr[Math.floor(Math.random() * myShows.length)];

export default Breathing
