let circles = [];
let windows = [];
let superstructureTitle;
let baseTitle;
let window1;
let window2;
let window3;
let window4;
let window5;
let window6;
let window7;
let window8;
let window9;
let window10;
let isClicked = true;

function setup() {
  createCanvas(windowWidth, windowHeight);

  superstructureTitle = new Title(width / 2, windowHeight / 15, "Superstructure");
  baseTitle = new Title(width / 2, 8 * windowHeight /15, "Base");

  // Create superstructure circles
  for (let i = 0; i < 5; i++) {
    let x = map(i, 0, 4, 100, width - 100);
    let y = windowHeight / 4;
    circles.push(new Circle(x, y, 90, 'superstructure', `Super ${i + 1}`));
  }

  // Create base circles
  for (let i = 0; i < 5; i++) {
    let x = map(i, 0, 4, 100, width - 100);
    let y = 3 * windowHeight / 4;
    circles.push(new Circle(x, y, 95, 'base', `Base ${i + 1}`));
  }


  circles[0].changeLabel('Artistic Intention');
  circles[1].changeLabel('Decline of the Aura');
  circles[2].changeLabel('Cult vs. Exhibition Value');
  circles[3].changeLabel('The Purpose of Art');
  circles[4].changeLabel('Ethics, Artist Ownership & Agency');
  circles[5].changeLabel('Physical Infrastructure');
  circles[6].changeLabel('Data Set');
  circles[7].changeLabel('Working Conditions of Artists');
  circles[8].changeLabel('Who\'s the artist');
  circles[9].changeLabel('Venture Capital');

  
}

function draw() {
  background(255);

  superstructureTitle.display();
  baseTitle.display();

  for (let circle of circles) {
    circle.display();
  }

  for (let window of windows) {
    window.display();
  }
}

function mouseClicked() {
  for (let circle of circles) {
    if (circle.contains(mouseX, mouseY)) {
      if (isClicked){
        if (circle === circles[0]) {
        windows.push(new Window(circle, "Deleuze argues that the goal of painting is to escape the possibility of a singular interpretation that simply narrates what's happening in the picture (link to the book). Paintings in different periods develop different solutions to achieve this goal. For example, in impressionism, artists like Monet escape the figurative through their method of painting, capturing multiple landscapes in various lighting in a way that captures their interpretation of the world without attributing a singular meaning to a particular piece; in expressionism, they extract the form so that it remains separate from its \"figurative\" surroundings; in the post-expressionism era, artists like Francis Bacon and Picasso may distort the figure. While most forms of generative AI art cannot escape the figurative by imitating the various painting styles in impressionism or expressionism, certain tools, like DALL-E 2, still escape the figurative by juxtaposing nonsensical forms next to each other.", "image1.jpg"));
        } else if (circle === circles[1]) {
        windows.push(new Window(circle, "Certain mediums are better replicated by generative AI; for example, Hollywood strikes preceded larger mobilizations by visual artists because film styles are easier to replicate. These differences in aura (i.e. visual art pieces have aura, whereas films and digital art do not as they lack the essential element of distance) may lead to certain more interactive and configurative mediums, such as video games and more modern exhibitions like Immersive Van Gogh, more popular. Most of these forms of art, especially the Immersive Van Gogh, rehash what is safe for profit; by projecting Van Gogh's original artwork on a large screen, they control the narrative, leave no room for the audience to interpret the art, and damage the original aspects that made the work unique: the brushwork and the differences in interpreting the art from up-close versus from afar. As generative AI continues to improve its ability to replicate these external forms of art in particular, a corresponding shift in popularity for them may follow.", "image2.jpg"));
        } else if (circle === circles[2]) {
        windows.push(new Window(circle, "Benjamin proposes two main purposes, or values, of art: the cult value represents the inherent purpose of creating art as a way to celebrate beauty and meaning, whereas the exhibition value represents its place in the commercial marketplace. Currently, a major purpose of AI generative art is exposing our subconscious — the cliches and prejudice that we hold, the subject of our expectations — the exact things artists like Dali were searching for by purposefully hallucinating themselves. Given this fuss-free ability, AI generative art might push artists to experiment with art forms beyond the cliche, thereby holding the potential to create more jobs, as humans are still responsible for evaluating whether these messages or mistakes are artistic or not.", "image3.jpg"));
        } else if (circle === circles[3]) {
        windows.push(new Window(circle, "In the age of technological advancements during the 1930s and beyond, Benjamin argued that the aura of a piece of art — the conceptualization of an artwork with respect to its distance to the viewer and its historical nuances — was crucial in determining how the audience interacted with and appreciated art. Another key aspect was the tendency towards intention-guessing: when an audience member concentrates on a piece to try and find the meaning or intention behind it, they are absorbed by the piece of art; however, when a distracted group views a piece of art, they absorb it. By contrast, the inherently opaque nature of AI-generated art, where the source of data and methods used to comprise them and generate a “new” piece of art are not revealed at all, renders AI art without an aura and without the means of intention-guessing. The future multiplicity of roles generated by AI art, such as the commissioner, collaborator, or worker, will make intention guessing more difficult to achieve.", "image4.jpg"));
        } else if (circle === circles[4]) {
        windows.push(new Window(circle, "Recently, people have used AI to generate art, claiming that as their own, and winning art competitions. Others have been selling AI-generated art for hundreds of thousands of dollars. This suggests a tendency for humans to anthropomorphize AI generators, which in reality profit off of and sometimes entirely copy real artists’ work without ethical and legal attributions. This stealing of agency, such as the case to make photography commercializable by framing pictures as drawing, is part of legal rhetoric to justify copyright. Other popular discussions surrounding AI's consciousness are fanned by confusion from companies and journalistic coverage. In this instance, criticism of AI is only a form of hype.", "image5.jpg"));
        } else if (circle === circles[5]) {
        windows.push(new Window(circle, "Stable diffusion is also a material expensive AI. In terms of physical infrastructure, it requires lots of computational power in terms of CPUs and GPUs which require lots of labor. Software is built on open-source platforms based on the labor of many developers. The data is scraped from the internet, so it also depends on the labor of many artists. Finally, it utilizes the internet and the cloud for online use which itself depends on the labor of technicians and developers. Contributes to climate change through mining, dumping of waste, and through shipping. Shipping itself contributes to 3.0% to global carbon emissions. Reported by the MIT Technology Review, training a single AI model can emit 626,000+ pounds of CO2 equivalent. Putting that in context, it’s about 5x the lifetime carbon emissions of an average passenger car. (https://anatomyof.ai/, Crawford)", "image6.jpg"));
        } else if (circle === circles[6]) {
        windows.push(new Window(circle, "Stable Diffusion was trained on a dataset of images and captions that was scraped from the web by LAION, a German non-profit that receives funding from Stability AI. The dataset includes over 5 billion image-text pairs, which were classified based on language, resolution, watermark likelihood, and aesthetic score. The Stable Diffusion model was trained on three subsets of the LAION-5B dataset: laion2B-en, laion-high-resolution, and laion-aesthetics v2 5+ (website link?). A third-party analysis of the model's training data found that approximately 47% of the images came from 100 different domains, with Pinterest being the largest source (8.5%). Other major sources included WordPress, Blogspot, Flickr, DeviantArt, and Wikimedia Commons. This means that Stable Diffusion is likely to reflect the biases and perspectives of the websites that were used to create the training dataset. For example, the model is more likely to generate images of white people than of people of color, as these groups are more likely to be represented in the images that were scraped from Pinterest and other popular websites.(https://waxy.org/2022/08/exploring-12-million-of-the-images\n-used-to-train-stable-diffusions-image-generator/, Biao)", "image7.jpg"));
        }else if (circle === circles[7]) {
        windows.push(new Window(circle, "Artists currently are already overworked on the basis of competition and digital art. As art becomes more commodified, large companies exploit artists to meet the demand that exists(Prisant). This can currently seen through the Hollywood strike. This is especially fueled by capitalism as there is a huge demand to consume art. As Stable Diffusion and such generative ai become more prominent in the art space. There become a competition between the artists and AI. As AI doesn't need to be paid, it can drive down wages for artists. Not only that, there is a question about relationship of ownership since currently most of stable diffusion's data set is from human art and it can lead to relationships of exploitation. Furthermore, it can not only compete with artists but other human dominated fields such as medicine. This is because AI is generally more competitive than human workers in many spaces. \n(https://theintercept.com/2023/07/25/strike-hollywood-ai-disney-netflix/, Klippenstein)\n(https://apnews.com/article/artificial-intelligence-hollywood-strikes-\nexplained-writers-actors-e872bd63ab52c3ea9f7d6e825240a202, Dalton) \n(https://www.forbes.com/sites/bardenprisant/2020/03/25/the-\ncommodification-of-contemporary-art/?sh=4078644636dc, Prisant)" , "image8.jpg"));
        }else if (circle === circles[8]) {
        windows.push(new Window(circle, "Stable diffusion creates its art based on prompts from a human operator. This creates a question of the relationship of labor between the human operator, the AI, and the art piece that is created. How much creativity is from the operator and how much is from the AI? It is complicated as AI uses data from the internet but at the same time has a distinct style. This can create huge legal problems as well as increase the problem with artist exploitation. For example, Photography, which was considered as mechanical reproduction of nature, largely parallels the dvelopment of law around generative AI. It recieved copyright protection when photography was shown to have human agency. This can be seen in this quote, \"When Mayer et Pierson appealed the decision in April of 1862, they used an argument that reintroduced human agency into the photographic process. By reframing photographs as les dessins photographiques — or photographic drawings, the plaintiffs successfully established that the development of photographs in a darkroom was part of an operator’s creative process.”\n(https://www.noemamag.com/what-is-ai-doing-to-art/, Rosson)", "image9.jpg"));
        }else if (circle === circles[9]) {
        windows.push(new Window(circle, "Stable Diffusion is funded by Emad Mostaque, who is the founder of Stability.ai. He made his fortune through being a hedge fund manager. They also raised money from other venture capital firms. As investors, they have huge control over the company and the products. This can have a negative effect shown through, Stability.ai's questionable company culture. Only 1.8 Stars on Glassdoor and there are complaints about management, toxic culture, and exaggeration. This can also lead to Unhealthy development such as promoting selling start-up companies to large companies to make a profit and Investing only in products that benefit the upper middle class. Furthermore, the wealth is concentrated within a few people and can allow minority ideologies such as TESCREALism to be promoted.(https://www.forbes.com/sites/kenrickcai/2023/06/04/stable\n-diffusion-emad-mostaque-stability-ai-exaggeration/?sh=66ed3e0075c5, Cai & Martin)(https://www.newyorker.com/magazine/2020/01/27/is-venture\n-capital-worth-the-risk, Heller)", "image10.jpg"));
        }
      }
      isClicked = false;
      redraw(); // Redraw the canvas after interaction
      break;
    }
  }
}


class Circle {
  constructor(x, y, r, group, label) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.group = group;
    this.label = label;
  }

  contains(x, y) {
    let d = dist(x, y, this.x, this.y);
    return d < this.r;
  }

  display() {
    noStroke();
    fill(this.group === 'superstructure' ? 'red' : 'blue');
    ellipse(this.x, this.y, this.r * 2);
    fill(255);
    textSize(11);
    textAlign(CENTER, CENTER);
    text(this.label, this.x, this.y);
  }

  changeLabel(newLabel) {
    this.label = newLabel;
  }
}

class Window {
  constructor(circle, initialText = "Default window text", imageSrc = "") {
    this.circle = circle;
    this.showCloseButton = true;
    this.textContent = initialText;
    this.image = loadImage(imageSrc); // Load the image
  }

  setTextContent(content) {
    this.textContent = content; // Set the text content for the window
  }

  updateImage(imageSrc) {
    this.image = loadImage(imageSrc); // Update the image
  }

  display() {
    let centerX = width / 2;
    let centerY = height / 2;
    let windowWidth = 1200; // Adjust the window width
    let windowHeight = 600; // Adjust the window height

    // Calculate the position of the window to keep it centered
    let windowX = centerX - windowWidth / 2;
    let windowY = centerY - windowHeight / 2;

    fill(220);
    rect(windowX, windowY, windowWidth, windowHeight);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(`${this.circle.label}`, centerX, centerY - 220);

    // Calculate text area position and size
    let textX = centerX - 550;
    let textY = centerY - 150;
    let textWidth = 500; // Adjust the width of the text area
    let textHeight = 10000;

    fill(0);
    textSize(16);
    textAlign(LEFT, TOP);
    text(this.textContent, textX, textY, textWidth, textHeight);

    if (this.image) {
      let imageX = centerX + 100; // Adjust the image X position
      let imageY = centerY - 150; // Adjust the image Y position
      let imageSize = 400; // Adjust the image size

      image(this.image, imageX, imageY, imageSize, imageSize);
    }

    if (this.showCloseButton) {
      this.displayCloseButton(windowX + windowWidth - 60, windowY); // Position close button at top right corner
    }
  }

  displayCloseButton(x, y) {
    fill(150);
    rect(x, y, 60, 30);
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text('Close', x + 30, y + 15);
  }

  closeWindow() {
    this.showCloseButton = false;
  }
}

class Title {
  constructor(x, y, text) {
    this.x = x;
    this.y = y;
    this.text = text;
  }

  display() {
    fill(0);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(this.text, this.x, this.y);
  }
}

function mousePressed() {
  let centerX = width / 2;
    let centerY = height / 2;
    let windowWidth = 1200; // Adjust the window width
    let windowHeight = 600; // Adjust the window height

    // Calculate the position of the window to keep it centered
    let windowX = centerX - windowWidth / 2;
    let windowY = centerY - windowHeight / 2;
  for (let window of windows) {
    if (window.showCloseButton && mouseX >= windowX + windowWidth - 60 && mouseX <= windowX + windowWidth &&
        mouseY >= windowY && mouseY <= windowY + 30) {
      windows.pop();
      isClicked = true;
      redraw(); // Redraw the canvas after closing
      break;
    }
  }
}
