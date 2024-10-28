<div style="text-align: center;">
  <h1>Search</h1>
</div>

In recent years, the term "Artificial Intelligence" has become a buzzword that everyone seems to be talking about. There’s chatter about AI potentially replacing software engineers and transforming entire industries. What do you think about this? Personally, I hadn’t given it much thought until I realized one crucial thing: those who know how to leverage AI to their advantage will be ahead of the curve. That’s why I decided to dive into the world of AI with Harvard’s CS50 Artificial Intelligence with Python course. This blog is the first in a series where I’ll share what I learned and explore the fundamental concepts of AI.

<div style="display: flex; justify-content: space-between; gap: 15px;">
    <div style="flex: 1; box-sizing: border-box;">
        <img src="https://media.licdn.com/dms/image/C4E12AQGuFPRFIIBu0Q/article-inline_image-shrink_1500_2232/0/1538431172787?e=1726704000&v=beta&t=OikbG0-i4d4ugoPj-4TrNF3eKhhCQcMqrJH_27WNZWo" alt="Facial recognition: AI’s way of recognizing friends and strangers alike." style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <p style="font-style: italic; color: #666; text-align: center;">Facial recognition: AI’s way of recognizing friends and strangers alike.</p>
    </div>
    <div style="flex: 1; box-sizing: border-box;">
        <img src="https://campaignsoftheworld.com/wp-content/uploads/2017/08/Google_Assistant_cotw.jpg" alt="Virtual assistants: AI that understands and responds to our voice commands." style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <p style="font-style: italic; color: #666; text-align: center;">Virtual assistants: AI that understands and responds to our voice commands.</p>
    </div>
    <div style="flex: 1; box-sizing: border-box;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1-w7gPyQ153QudM1nNG_jmZguaXXshNJ5g&usqp=CAU" alt="AI technology: The cutting-edge of innovation and creativity." style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <p style="font-style: italic; color: #666; text-align: center;">AI is capable of playing a variety of games, ranging from classic board games to complex video games.</p>
    </div>
</div>

## The Heart of AI: Core Concepts

### Search Algorithms: The Pathfinders

Imagine you’re locked in an escape room at 'Chapel Hill Escapes' with a series of clues and puzzles to solve.  Search algorithms are like the strategies you use to navigate through the room and solve each puzzle. Let's look at some important algorithms that allow AI to get its way through the escape room.

- **Depth-First Search (DFS)**
  - **Approach:** Explore one path deeply before trying another, much like examining every corner of one room thoroughly before moving on to another.
  - **Example:** Think of checking every drawer and hidden spot in one room for a key before moving on to the next room.
  - **Data Structure:** Stack (Last In, First Out).

- **Breadth-First Search (BFS)**
  - **Approach:** Explore all immediate options before going further, similar to checking every object and clue in one area of the room before moving on to other areas.
  - **Example:** Imagine systematically searching each table and corner in a room before advancing to the next part of the escape room.
  - **Data Structure:** Queue (First In, First Out).


 <div style="flex: 1; box-sizing: border-box;">
        <img src="https://miro.medium.com/v2/resize:fit:750/0*ZIsIX-f-j7kvxJMW.png
" alt="Virtual assistants: AI that understands and responds to our voice commands." style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <p style="font-style: italic; color: #666; text-align: center;"></p>
    </div>



- **Greedy Best-First Search**
  - **Approach:** Always choose the path that looks most promising, like taking the shortcut that seems fastest based on a map.
  - **Example:** GPS systems suggesting routes based on real-time traffic conditions.

- **A* Search**
  - **Approach:** Balance the cost of the current path with the estimated cost to the goal, like using both distance and traffic data to find the best route.
  - **Example:** Your navigation app calculating the optimal driving route considering both distance and expected traffic delays.

### Adversarial Search: The Strategic Minds

In a competitive arena, AI needs to outthink its opponents. Enter adversarial search, the strategist’s tool for making smart decisions:

- **Minimax Algorithm**
  - **Purpose:** Find the best move in a game by considering both your moves and your opponent’s responses.
  - **Example:** Chess AI deciding on a move by evaluating how both your and your opponent's strategies play out.

- **Alpha-Beta Pruning**
  - **Purpose:** Optimize the Minimax algorithm by ignoring branches that won’t impact the final decision.
  - **Example:** A chess program cutting off moves that are clearly inferior to other moves already considered.

- **Depth-Limited Minimax**
  - **Approach:** Limit the search to a certain number of moves and use an evaluation function for deeper decisions.
  - **Example:** Game AI analyzing moves up to a specific depth and making decisions based on board configuration.

---

As you explore the world of AI, you'll discover that it’s not just about algorithms and data; it's about imagining new possibilities and solving real-world problems. Keep experimenting and stay curious—there's always more to learn!

## Additional Resources

Check out these exciting resources to get a better understanding of search algorithms:

- [Search Algorithms](https://www.geeksforgeeks.org/searching-algorithms/)
