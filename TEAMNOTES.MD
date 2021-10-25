# Team notes
This is for maintaining communication about your team's working meetings to "ship" the project.

## October 5
- What are the characteristics of the card?
  - Different Header
  - Icons for each
  - Solid color header with wire box body
  - Fully customizable text within card
  - Header & subheader
  - Text divider is centered, text is not
- What design considerations must we take into account?
  - Uniform shaped with different contents
  - Start text at same spacing
  - Uniform text-wrapping
  - Light vs dark designs
  - Colored text on dark background?
  - Changing colors
  - Circles around icons
  - Bold text in headings
  - Two fonts?
  - Caps lock for headings
  - Resizing card to page resize
- What accessibility concerns do we potentially have?
  - Icons allow for differentiability
  - Colors easier for differentiability
  - Screen readers
  - Tab order
  - Colors
  - Enlarged text for difficulty sighting
- What security concerns do we potentially have?
  - Modifying data if connected to backend
  - Copy-paste ability?
- What "states" does this card have?
  - Hover over states
  - Drop down items?
  - Hidden items until user actions
- What do we call it?
  - penguin-card
- What areas do we need to account for flexible content / HTML entry of any kind?
  - Headings
  - Icon
  - Body
  - Spacing
- Do we have room for additional reusable atoms to be produced? (there are 4 total by my count)
  - Icon
  - Heading
  - Body box
  - Title Text
- What should we call each of them?
  - penguin-icon
  - penguin-state-card
  - penguin-body
  - penguin-card


## Meeting notes
### Meeting Date
In Class October 7th
#### What we did:
 - Decided names for card components
   - card-icon
   - card-header
   - card-frame
   - learning-card
 - Assigned components to members
   - Pooja = Icon
   - Griffin = Frame
   - Elizabeth = Header
   - Jonah = Card
 - Icon properties
   - Color
   - Size
   - Icon-img
 - Header properties
   - Main Header
   - Sub Header
   - Font details (Font family, decoration, size, etc)
   - Color
 - Frame properties
   - Size
   - Color
   - Slot
   - Dropdown option
   - Outline
 - Card properties
   - Size
   - Primary color
   - Secondary Color
   - Dropdown Option
   - Type

#### What we'll do next
- Individual work researching components
- Start light development
- Look into simple-colors

### Meeting Date
In Class October 14th
#### What we did:
- Meeting with other teams
  - Jonah
    - All working on different parts/ working in different ways
    - Fishing
    - Elements consistent across groups
      - Header/banner, Icon, Body, Scaffolding
    - All working towards Check in 2
    - Building from LearningCard at first, then decided to create custom elements
  - Griffin
    - Someone is working on a different card design? Are we allowed to do that?
    - Making a card from scratch then breaking it down into parts
    - How to design the "reveal" content part of the card
  - Pooja
- Take Aways
  - Fish
  - Phish
  - Similar structure across teams
- Learn from others
  - Similar naming and components
  - This man likes to fish a lot
- Next Steps
  - Fully implement Simple Colors
  - Work Towards check in
    - Dividing all the parts / work up
    - Trying to implement SimpleColors
    - Other groups making different card designs?

#### What we'll do next
- Work towards Sunday check-in

### Meeting Date
In Class October 19th
#### What we did:
- Styling for different sizes
- Switch case rendering with multiple functions
- We will definitely use @media and min width for styling
- We could take his approach but make it more flexible by making multiple elements and slotting the content in place

#### What we'll do next
- Put together the learning card from what is in index.html
- Work on styling before Thursday / the weekend
- Click to reveal
- tab order

### Meeting Date
Offcie Hours October 22nd
#### What we did:
- Implemented and selected colors from simple colors
- Implemented multi-slot functionality
- Patially and fully functional header, content, and icon.

#### What we'll do next
- Work on the design
- Refine the overall card
- Collapsable?

## Status check ins
These are dedicated status check-ins as this is a multi-week project
### Check-in 1
- Basic project set up and running
- Started working on individual elements
### Check-in 2
- Components gutted for development
- Icon should have a basic API to render the icon based on having the correct name leveraged
- Header / banner element should have a basic API supporting two named slots and implementing your icon
- Your icon definition should be dynamically imported in the constructor or firstUpdated life-cycle of the header / banner element (reading and examples before should help inform this)
  - It is for the main card.
### Check-in 3
- All elements scoped out and somewhat working
- Functional multi-slot
- Icon as an icon alone
### Check-in 4
-
-
