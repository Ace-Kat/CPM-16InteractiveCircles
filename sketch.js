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
        windows.push(new Window(circle, "Text for Window 1", "image1.jpg"));
        } else if (circle === circles[1]) {
        windows.push(new Window(circle, "Text for Window 2", "image2.jpg"));
        } else if (circle === circles[2]) {
        windows.push(new Window(circle, "Text for Window 3", "image3.jpg"));
        } else if (circle === circles[3]) {
        windows.push(new Window(circle, "Text for Window 3", "image4.jpg"));
        } else if (circle === circles[4]) {
        windows.push(new Window(circle, "Text for Window 3", "image5.jpg"));
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
    textSize(12);
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

    fill(220);
    rect(centerX - 600, centerY - 300, 1200, 600); // Adjust the window size and position
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
      this.displayCloseButton(160, 130); // Position close button at top left corner
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
  for (let window of windows) {
    if (window.showCloseButton && mouseX >= 160 && mouseX <= 220 &&
        mouseY >= 130 && mouseY <= 160) {
      windows.pop();
      isClicked = true;
      redraw(); // Redraw the canvas after closing
      break;
    }
  }
}
