
# Random Sundry
[Live Site](https://random-sundry.herokuapp.com/)

A robust web app for randomly generating items and concepts that can be used in tabletop roleplaying games such as Dungeons and Dragons. Users can make accounts and save their favorite random results.

<p align="center">
<img src="https://jessypeck.netlify.com/dist/images/portfolio.png" alt="portfolio site screenshot" width="50%"/>
</p>

#### Project Goals:
- Responsive design that feels natural on a phone
- User sessions are managed with Passport.js and MongoDB
- User passwords are encrypted with Bcrypt
- Users can "like" results and easily browse their favorite's list
- Large variety of generators, which operate on the back-end and re-use most of their code

#### To-Do:
- Complete all initially planned generators
- Implement password recovery
- Add an About Page and include contact information

#### Known Issues:
- SVG images do not display as expected on Firefox

__Libraries Used:__ React, React-Router, Redux, Redux-Thunk, SCSS, Express, MongoDB, Mongoose, Passport.js, Bcrypt, uuid, [FontAwesome](https://fontawesome.com/), [react-tooltip](https://github.com/wwayne/react-tooltip), [vivus](https://maxwellito.github.io/vivus/)

__Tools Used:__ Babel, ESLint, yarn, webpack