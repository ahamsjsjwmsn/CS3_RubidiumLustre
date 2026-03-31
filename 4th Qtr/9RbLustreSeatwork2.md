# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

With position: relative, the sidebar remains in its original place in the document flow, but it can now be moved using top, left, right, or bottom. In this case, top: 20px moves it downward and left: 20px moves it to the right.

In contrast, with the default static positioning, the top and left properties do not work.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

When scrolling the page, the footer stays fixed at the bottom of the screen and does not move. This is because position: fixed attaches the element to the viewport.

This is different from position: relative because relatively positioned elements still move with the page and remain part of the normal document flow.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

position: absolute removes the element from the normal document flow and allows it to be placed at a specific location using top, left, right, or bottom.

It is different from fixed because absolute is positioned relative to the nearest positioned parent element, while fixed is positioned relative to the browser window and stays in place when scrolling

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

The notice appears on top because it has a higher z-index value (2) compared to the content (1). Elements with higher z-index values are displayed in front.

If the values are swapped, the content will appear on top of the notice instead.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).

    We would have to place the .notice in the .content. 

.content {
    background: lightyellow;
    width: 300px;
    height: 200px;
    position: relative; 
    top: 66px; 
    left: 200px;
    z-index: 1;
}

.notice {
    position: absolute;
    top: 0;
    right: 0;
    background: orange;
    padding: 10px;
    z-index: 2;
}

    * Try to change the position of .content to relative then to fixed. What do you observed each time?

    With relative, it would stay in its normal place and the page would scroll normally. On the other hand, with fixed, .content becomes stuck on screen and it does not move when scrolling. .notice still stays at the top right of .content.

    * What do you observe on about the effect of z-index on .notice and .content boxes?

    A greater z-index would tent to put one thing in front the other.



3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 

    Static is essentially the default, while relative stays in flow but can be slightly moved. Absolute is removed from flow and positioned based on a parent, then finally, fixed is locked to the screen, even when you scroll.

    b. How does absolute positioning depend on its parent element?

    An absolute element positions itself relative to the nearest parent that isn't static; if none exists, then it would use the whole page.

    c. How do you differentiate sticky from fixed (you can research on sticky)?

    Fixed always stays in one part of the screen, whereas sticky only "sticks" until you scroll to a certain point.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

    I think using fixed for the header stuff, such as the school event name, would be great, then sticky for things like the schedule that need to be still but not the entire time. I would also use absolute to place a registration part perhaps so it may stand out.