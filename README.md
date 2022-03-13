
Broken down the tasks into MVP and extension
### MVP 
- [x] Display the list of `Sections` as `Menu`
- [x] Display the actual `Sections` and their corresponding `Item`
- [x] On click, a Modal should display the product details
- [x] Add Product Unavailable
- [x] Add Section Unavailable
- [ ] Scroll to Menu
- [ ] Handle Display Order
- [ ] Handle Sub sections

### Extensions
- [ ] Sticky menu during scroll
- [ ] Lift state and event handlers, refactor to Redux/Context

### Bugs
- [ ] Horizontal scroll for `Menu` during responsive tests isn't functional
- [ ] Product detail responsiveness

### Slight improvements
- Added cursor:pointer to hover events to provide instant feedback that an area is clickable
- 
### Questions
- When will a product item take all the space in a section?
- How deep can sub sections go?
- For the Unavailable `Item` state, is the red border necessary or is it just a different level of opacity
- How do I derive the actual price from `unitPriceFractional`? I divided it by 100 but I wanted to be sure
- Is it correct to assume that the `displayOrder` values are within the range of the array length and with no keys skipped?

#### How to run the Development server

```bash
npm run dev
# or
yarn dev
```
