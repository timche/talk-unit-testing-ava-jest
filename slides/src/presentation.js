// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Heading,
  Text,
  Image,
  Link,
  BlockQuote,
  Quote,
  Cite,
  List,
  ListItem,
  Code
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} theme={theme}>
        <Slide>
          <Heading fit caps>
            Unit Testing
          </Heading>
          <Text fit caps>
            With AVA & Jest
          </Text>
        </Slide>
        <Slide>
          <Image
            src="https://avatars3.githubusercontent.com/u/8075074"
            width={200}
            style={{ borderRadius: '50%' }}
          />
          <Text style={{ marginTop: 40 }} bold>
            Tim Cheung
          </Text>
          <Text>Software Engineer at NewStore</Text>
          <Link href="https://twitter.com/timche_">@timche_</Link>
        </Slide>
        <Slide>
          <Text>Who has heard of unit tests? ☝️</Text>
          <Text>Who writes unit tests? ✋</Text>
        </Slide>
        <Slide>
          <Text>What is unit testing?</Text>
        </Slide>
        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textSize={30}>
              Unit testing is, roughly speaking, testing bits of your code in
              isolation with test code. The immediate advantages that come to
              mind are:<br />
              <br />1. Running the tests becomes automate-able and repeatable.<br />
              <br />2. You can test at a much more granular level than
              point-and-click testing via a GUI.
            </Quote>
            <Cite>Rytmis on StackOverflow</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Text>Let's see some examples 👀</Text>
        </Slide>
        <Slide>
          <Heading>AVA & Jest</Heading>
          <List>
            <ListItem>Easy to set up and use</ListItem>
            <ListItem>Simple test syntax</ListItem>
            <ListItem>Run tests concurrently</ListItem>
            <ListItem>Promise/Async support</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>AVA</Heading>
          <List>
            <ListItem>Enforces writing atomic tests</ListItem>
            <ListItem>
              No implicit globals like <Code>describe</Code> or <Code>it</Code>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>Jest</Heading>
          <List>
            <ListItem>Wider API</ListItem>
            <ListItem>
              Easier to support ES6+ with Babel for source and test files with{' '}
              <Code>babel-jest</Code>
            </ListItem>
            <ListItem>A little faster than AVA because of caching</ListItem>
            <ListItem>
              Ships with mocking and coverage support by default
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>Thanks 🎤💥</Heading>
        </Slide>
      </Deck>
    )
  }
}
