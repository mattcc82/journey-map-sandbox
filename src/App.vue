<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <section class="nav-section">
    <!-- nav -->
      <app-navbar
        :bs-variant="navBsVariant"
        :nav-title="navTitle"
        :bs-type="navBsType">
      </app-navbar>
    </section>
    <section class="main-section">
    <!-- main stage -->
    <router-view/>
    </section>
    <section class="footer-section">
    <!-- footer -->
    </section>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
export default {
  name: 'app',
  components: {
    'app-navbar': AppNavbar
  },
  data () {
    return {
      // navbar options
      navTitle: 'Charge-It CX Journey Map',
      navBsVariant: 'transparent',
      navBsType: 'light'
    }
  }
}
</script>

<style lang="scss">
$primary: #00a083;

body {
  font-family: 'Open Sans', sans-serif !important;
  background: rgba(227,228,206,1);
  background: -moz-linear-gradient(left, rgba(227,228,206,1) 0%, rgba(218,219,199,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(227,228,206,1)), color-stop(100%, rgba(218,219,199,1)));
  background: -webkit-linear-gradient(left, rgba(227,228,206,1) 0%, rgba(218,219,199,1) 100%);
  background: -o-linear-gradient(left, rgba(227,228,206,1) 0%, rgba(218,219,199,1) 100%);
  background: -ms-linear-gradient(left, rgba(227,228,206,1) 0%, rgba(218,219,199,1) 100%);
  background: linear-gradient(to right, rgba(227,228,206,1) 0%, rgba(218,219,199,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e3e4ce', endColorstr='#dadbc7', GradientType=1 );
}

@import "~bootstrap/scss/bootstrap.scss";
@import '~bootstrap-vue/dist/bootstrap-vue.css';
@import '~@fortawesome/fontawesome-free/css/all.min.css'

</style>
