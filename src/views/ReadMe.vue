<template>
  <div class="readme">
    <h1 class="heading">Thank you!❤️</h1>
    <h2 class="sub-heading">
      This project is my version of the Venue People assignment.
    </h2>
    <p class="text">
      I would like to express my sincere gratitude for the opportunity to take
      this assignment. I did my best to reproduce the mockup provided, paying
      attention to the requirements.
    </p>
    <p class="text">
      I still have quite some ideas about things I would add to improve in this
      assignment. However, as I already added some extra features, I decided to
      wrap it up from here.
    </p>
    <p class="text">
      But, please! Do let me know if there is anything else I could do to
      improve this assignment. I'm very excited by the possibility of working
      for Constell, I don't want to miss this opportunity.
    </p>

    <section>
      <h3 class="section-heading">
        Some extra features on top of the requirements 👇🏻
      </h3>
      <ul>
        <li>Translations <i>(English and Dutch)</i></li>
        <li>Feedback with toast notification</li>
        <li>Tooltips</li>
        <li>Transitions</li>
        <li>Drawer side navigation</li>
        <li>404 page</li>
      </ul>
    </section>

    <section>
      <h3 class="section-heading">What If I had to build more features 👇🏻</h3>
      <ul>
        <li>
          I would add the possibility of performing CRUD operations on team
        </li>
        <li>I would add pagination for the user's list.</li>
        <li>I would add a light /dark theme toggle.</li>
        <li>I would make a photo upload functionality</li>
        <li>I would look for opportunities to improve the UX</li>
        <li>More tests</li>
      </ul>
    </section>
    <a
      class="git-hub-link"
      href="https://github.com/giovanizanetti/Venue-people#readme"
      >Check the complete README on my Github page</a
    >
  </div>
</template>

<style lang="scss" scoped>
.readme {
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: $tablet-md) {
    padding: 7rem;
  }
  .heading {
    font-size: $typography-5;
    text-align: center;
  }
  .sub-heading {
    font-size: $typography-4;
    padding: $margin-lg $margin-xl;
  }
  .section-heading {
    text-align: center;
    font-size: $typography-3;
    font-weight: 600;
  }
  section {
    ul {
      text-align: center;
      margin: $margin-md $margin-xl;
      li {
        text-align: center;
        font-size: 1.2rem;
      }
    }
  }

  p.text {
    margin: $margin-md;
    font-size: 20px;
  }

  .git-hub-link {
    display: flex;
    justify-content: center;
    font-size: 1.8rem;
    text-decoration: underline;
    font-weight: 600;
    margin-top: $margin-lg;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
