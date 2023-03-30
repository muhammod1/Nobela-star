import React from "react";
import NavBar from "../components/NavBar";
import AiCon from "../assets/intro.svg"
import Footer from "../components/Footer";


const Introduction = () => {
  return (
    <div>
      <div className="bg-black">
        <NavBar />
      </div>
        <div className="h-fit w-full bg-black  overflow-hidden">
          <img className="h-fit mx-auto" src={AiCon} alt="" />
        </div>
      <div className=" w-[95%] max-w-[1420px] mx-auto">
        <p className="my-7 font-bold text-[20px] text-black">
          Introduction to AI
        </p>
        <div>
          <span className="font-bold">Artificial intelligence (AI) </span> is a
          field of computer science that focuses on the creation of intelligent
          machines that can perform tasks that typically require human-level
          intelligence, such as visual perception, speech recognition,
          decision-making, and language translation. AI is based on the idea of
          building machines that can "learn" and "think" like humans, enabling
          them to complete complex tasks and solve problems in ways that were
          previously only possible for humans.
          <br />
          <br />
          There are several subfields within AI, including machine learning,
          deep learning, natural language processing, computer vision, and
          robotics. These subfields use various techniques and algorithms to
          enable machines to learn from data and experience, make predictions,
          and take actions based on their knowledge and understanding of the
          world.
          <br />
          <br />
          One of the key features of AI is its ability to learn from data. This
          is done through the use of algorithms that can analyze large amounts
          of data and identify patterns and relationships. These algorithms are
          used to build models that can be trained to make predictions, classify
          data, or recognize patterns. Machine learning is a type of AI that
          focuses on the development of algorithms that can automatically learn
          and improve from experience without being explicitly programmed.
          <br />
          <br />
          Deep learning is a subfield of machine learning that uses artificial
          neural networks to simulate the learning process of the human brain.
          These neural networks consist of interconnected nodes that process
          information and learn to recognize patterns through multiple layers of
          analysis. This technique has been highly successful in a range of
          applications, including image and speech recognition, natural language
          processing, and game playing.
          <br />
          <br />
          Natural language processing (NLP) is a subfield of AI that focuses on
          enabling machines to understand and interpret human language. This
          involves teaching machines to recognize and process natural language
          in all its forms, including spoken and written language. Applications
          of NLP include language translation, chatbots, and voice assistants.
          <br />
          <br />
          Computer vision is a subfield of AI that focuses on enabling machines
          to interpret and understand visual data, such as images and videos.
          This involves teaching machines to recognize objects, patterns, and
          other visual elements in images and videos, and to extract meaningful
          information from them. Applications of computer vision include facial
          recognition, object detection, and autonomous vehicles.
          <br />
          <br />
          <p className="font-bold">4 main types of artificial intelligence</p>
          Learning in AI can fall under the types “narrow,” “general,” and
          “super.” These categories demonstrate AI’s capabilities as it
          evolves—performing narrowly defined sets of tasks, performing the same
          ability to think like humans (general), and performing beyond human
          capability. Then, there are four main types of AI as defined by Arend
          Hintze, researcher and professor of integrative biology at Michigan
          State University [1]. They are as follows:
          <br />
          <br />
          <p className="font-bold">1. Reactive machines</p>
          Reactive machines are AI systems that have no memory and are task
          specific, meaning that an input always delivers the same output.
          Machine learning models tend to be reactive machines because they take
          customer data, such as purchase or search history, and use it to
          deliver recommendations to the same customers.
          <br />
          <br />
          This type of AI is reactive. It performs “super” AI, because the
          average human would not be able to process a customer’s entire Netflix
          history and feed back customized recommendations. Reactive AI, for the
          most part, is reliable and works well in inventions like self-driving
          cars. It doesn’t have the ability to predict future outcomes unless it
          has been fed the appropriate information.
          <br />
          <br />
          Compare this to our human lives, where most of our actions are not
          reactive because we don’t have all the information we need to react
          upon, but we have the capability to remember and learn. Based on those
          successes or failures, we may act differently in the future if faced
          with a similar situation.
          <br />
          <br />
          Beat at chess by IBM’s supercomputer: One of the best examples of
          reactive AI is when Deep Blue, IBM’s chess-playing AI system, beat
          Garry Kasparov in the late 1990s. Deep Blue could identify their own
          and their opponents’ pieces on the chessboard to make predictions, but
          it does not have the memory capacity to use past mistakes to inform
          future decisions. It only makes predictions based on what moves could
          be next for both players and selects the best move.
          <br />
          <br />
          Netflix recommendations: Netflix’s recommendation engine is powered by
          machine learning models that process the data collected from a
          customer’s viewing history to determine specific movies and TV shows
          that they will enjoy. Humans are creatures of habit—if someone tends
          to watch a lot of Korean dramas, Netflix will show a preview of new
          releases on the home page.
          <br />
          <br />
          <p className="font-bold">2. Limited memory</p>
          The next type of AI in its evolution is limited memory. This algorithm
          imitates the way our brains’ neurons work together, meaning that it
          gets smarter as it receives more data to train on. Deep learning
          improves image recognition and other types of reinforcement learning.
          <br />
          <br />
          Limited memory AI, unlike reactive machines, can look into the past
          and monitor specific objects or situations over time. Then, these
          observations are programmed into the AI so that its actions can
          perform based on both past and present moment data. But in limited
          memory, this data isn’t saved into the AI’s memory as experience to
          learn from, the way humans might derive meaning from their successes
          and failures. The AI improves over time as it’s trained on more data.
          <br />
          <br />
          Self-driving cars: A good example of limited memory AI is the way
          self-driving cars observe other cars on the road for their speed,
          direction, and proximity. This information is programmed as the car’s
          representation of the world, such as knowing traffic lights, signs,
          curves, and bumps in the road. The data helps the car decide when to
          change lanes so that it does not get hit or cut off another driver.
          <br />
          <br />
          <p className="font-bold">3. Theory of mind</p>
          The first two types of AI, reactive machines and limited memory, are
          types that currently exist. Theory of mind and self-awareness are AI
          types that will be built in the future. As such, there aren’t any real
          world examples yet.
          <br />
          <br />
          If it is developed, theory of mind AI could have the potential to
          understand the world and how other entities have thoughts and
          emotions. In turn, this affects how they behave in relation to those
          around them.
          <br />
          <br />
          Humans understand how our own thoughts and emotions affect others, and
          how others’ affect us this is the basis of our society’s human
          relationships. In the future, theory of mind AI machines could be able
          to understand intentions and predict behavior, as if to simulate human
          relationships.
          <br />
          <br />
          <p className="font-bold">4. Self-awareness=</p>
          The grand finale for the evolution of AI would be to design systems
          that have a sense of self, a conscious understanding of their
          existence. This type of AI does not exist yet.
          <br />
          <br />
          This goes a step beyond theory of mind AI and understanding emotions,
          to being aware of themselves, their state of being, and being able to
          sense or predict others’ feelings. For example, “I’m hungry” becomes
          “I know I am hungry” or “I want to eat lasagna because it’s my
          favorite food.”
          <br />
          <br />
          We are a long way from self-aware AI because there is still so much to
          uncover about the human brain’s intelligence and how memory, learning,
          and decision-making work.
          <br />
          <br />
          <p className="font-bold">
            What is Artificial Intelligence Used for Today?
          </p>
          Several examples of artificial intelligence impact our lives today.
          These include FaceID on iPhones, the search algorithm on Google, and
          the recommendation algorithm on Netflix. You’ll also find other
          examples of how AI is in use today on social media, digital assistants
          like Alexa, and ride-hailing apps such as Uber.
          <br />
          <br />
          <p className="font-bold">
            1. Face Detection and Recognition Technology
          </p>
          Virtual filters on Snapchat and the FaceID unlock on iPhones are two
          examples of AI applications today. While the former uses face
          detection technology to identify any face, the latter relies on face
          recognition.
          <br />
          <br />
          <p className="font-bold">2. Text Editor</p>
          Several text editors today rely on artificial intelligence to provide
          the best writing experience.
          <br />
          <br />
          For example, document editors use an NLP algorithm to identify
          incorrect grammar usage and suggest corrections. Besides
          auto-correction, some writing tools also provide readability and
          plagiarism grades.
          <br />
          <br />
          <p className="font-bold">3. Social Media</p>
          Social media platforms such as Facebook, Twitter, and Instagram rely
          heavily on artificial intelligence for various tasks.
          <br />
          <br />
          Currently, these social media platforms use AI to personalize what you
          see on your feeds. The model identifies users’ interests and
          recommends similar content to keep them engaged.
          <br />
          <br />
          Social media networks use artificial intelligence algorithms to
          personalize user feeds and filter unnecessary information like hate
          speech and posts inciting violence and discrimination. |
          200degrees/Pixabay.com
          <br />
          <br />
          <p className="font-bold">4. Chatbots</p>
          Getting queries directly from a customer representative can be very
          time-consuming. That’s where artificial intelligence comes in.
          <br />
          <br />
          Computer scientists train chat robots or chatbots to impersonate the
          conversational styles of customer representatives using natural
          language processing.
          <br />
          <br />
          Chatbots are currently being used by many businesses to assist
          potential customers with their queries. | 200degrees/Pixabay.com
          <br />
          <br />
          Chatbots can now answer questions that require a detailed response in
          place of a specific yes or no answer. What’s more, the bots can learn
          from previous bad ratings to ensure maximum customer satisfaction.
          <br />
          <br />
          As a result, machines now perform basic tasks such as answering FAQs
          or taking and tracking orders.
          <br />
          <br />
          <p className="font-bold">5. Recommendation Algorithm</p>
          Media streaming platforms such as Netflix, YouTube, and Spotify rely
          on a smart recommendation system that’s powered by AI.
          <br />
          <br />
          First, the system collects data on users’ interests and behavior using
          various online activities. After that, machine learning and deep
          learning algorithms analyze the data to predict preferences.
          <br />
          <br />
          That’s why you’ll always find movies that you’re likely to watch on
          Netflix’s recommendation. And you won’t have to search any further.
          <br />
          <br />
          <p className="font-bold">6. Search Algorithm</p>
          Search algorithms ensure that the top results on the search engine
          result page (SERP) have the answers to our queries. But how does this
          happen?
          <br />
          <br />
          Search companies usually include some type of quality control
          algorithm to recognize high-quality content. It then provides a list
          of search results that best answer the query and offers the best user
          experience.
          <br />
          <br />
          Search engines like Google is powered by multiple algorithms that help
          it match people’s queries with the best answers available online. |
          Google
          <br />
          <br />
          Since search engines are made entirely of codes, they rely on natural
          language processing (NLP) technology to understand queries.
          <br />
          <br />
          <p className="font-bold">7. Digital Assistants</p>
          In October 2011, Apple’s Siri became the first digital assistant to be
          standard on a smartphone. However, voice assistants have come a long
          way since then.
          <br />
          <br />
          Today, Google Assistant incorporates advanced NLP and ML to become
          well-versed in human language. Not only does it understand complex
          commands, but it also provides satisfactory outputs.
          <br />
          <br />
          <p className="font-bold">8. Smart Home Devices</p>
          Various smart home devices now use AI applications to conserve energy.
          <br />
          <br />
          For example, smart thermostats such as Nest use our daily habits and
          heating/cooling preferences to adjust home temperatures. Likewise,
          smart refrigerators can create shopping lists based on what’s absent
          on the fridge’s shelves.
          <br />
          <br />
          The way we use artificial intelligence at home is still evolving. More
          AI solutions now analyze human behavior and function accordingly.
          <br />
          <br />
          Finally, robotics is a subfield of AI that focuses on the design and
          development of machines that can perform physical tasks in the
          physical world. This involves integrating AI techniques and algorithms
          into robots and other physical machines, enabling them to perform
          complex tasks and operate autonomously.
          <br />
          <br />
          In conclusion, AI is a rapidly evolving field that has the potential
          to transform many industries and aspects of daily life. By enabling
          machines to learn, reason, and interact with the world in more
          human-like ways, AI is driving innovation and progress across a range
          of fields, from healthcare and finance to transportation and
          entertainment.
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Introduction;
