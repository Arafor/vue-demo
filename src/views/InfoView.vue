<template>
  <div class="about">
    <p>Exercise #2
      Using Vue 3 (all SFCs should be written with typescript and composition API) create an app with 3
      routes:
      
      Login page
      -
      a simp
      le form with email and password inputs and a submit button, styling not
      required. When the submit button is clicked, set user as logged in (logged in state should be
      saved in local or session storage)
      
      Data page
      -
      choose any free API
      (https://github.com/pub
      lic
      -
      apis/public
      -
      apis#animals), fetch
      data from it and display it in a grid. Show loading and error states.
      
      Info page
      -
      display just a paragraph of text.
      The data page and the info page should include a logout button if the user is logged in. When the
      logou
      t button is clicked, set the user as logged out.
      Authorization rules:
      
      A logged in user should be able to visit the
      D
      ata page or the
      I
      nfo page
      
      A guest user (not logged in) should be able to visit the
      L
      ogin page or the
      I
      nfo page
      
      If a user is trying to access
      a page they are not allowed to access, redirect them to any page
      they can access. Make this functionality in a way that would work well if the app had many
      more routes.</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
