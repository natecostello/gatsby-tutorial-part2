import React from "react"
import { user } from "./about-css-modules.module.css"
import { avatar } from "./about-css-modules.module.css"
import { description } from "./about-css-modules.module.css"
import { username } from "./about-css-modules.module.css"
import { excerpt } from "./about-css-modules.module.css"

import Container from "../components/container"

//console.log(styles)

const User = props => (
  <div className={user}>
    <img src={props.avatar} className={avatar} alt="" />
    <div className={description}>
      <h2 className={username}>{props.username}</h2>
      <p className={excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
      <User
        username="Maria Randall"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
        excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Daniela Dewitt"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
        excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  )
}