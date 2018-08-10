<template>
  <b-navbar toggleable="lg" :type="bsType" :variant="bsVariant" sticky>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">{{ navTitle }}</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav class="btn-group" role="group">
        <b-nav-item
          :exact="link.path === '/'"
          :class="$route.path === link.path ? 'btn btn-primary btn-sm' : 'btn btn-dark btn-sm'"
          v-for="(link, index) in links"
          :to="link.path"
          :key="index"
          @click="slideActive">
          {{ link.name }}
        </b-nav-item>
        <span class="nav-slide-line"></span>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="nav-user ml-auto">
        <li style="align-self: center;"><i class="fas fa-user"></i></li>
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>Username</em>
          </template>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import {
  TweenMax,
  TimelineLite,
  Power2,
  Elastic,
  CSSPlugin
} from 'gsap/TweenMax'

export default {
  name: 'appNavbar',
  props: [
    'navTitle', 'bsType', 'bsVariant'
  ],
  data () {
    return {
      links: []
    }
  },
  methods: {
    slideActive () {
      this.$nextTick (function () {
        let activeNav = document.querySelector('.btn-primary')
        let activeNavOffset = activeNav.offsetLeft
        let navActiveSlide = document.querySelector('.nav-slide-line')
        TweenMax.fromTo(
          navActiveSlide,
          0.75,
          {
            backgroundColor: '#00a083',
          },
          {
            backgroundColor: '#000000',
            left: activeNavOffset,
            ease: Power2.easeInOut
          }
        )
      })
    }
  },
  mounted () {
    this.slideActive()
    window.addEventListener('resize', this.slideActive())
  },
  created () {
    this.$router.options.routes.forEach(route => {
      if (route.show) {
        this.links.push({
          name: route.name,
          path: route.path,
          order: route.order
        })
      }
    })
    this.links.sort(function (a, b) {
      return a.order - b.order
    })
  }
}

</script>

<style scoped>
  li.nav-item.btn {
    width: 33%;
  }

  span.nav-slide-line {
    display: block;
    padding: 0;
    margin: 0;
    position: absolute;
    height: 8px;
    top: 32px;
    width: 33%;
    background-color: #000000;
    z-index: 9;
  }

  @media (max-width: 992px) {
    span.nav-slide-line {
      display: none;
    }
  }

  @media (max-width: 992px) {
    li.nav-item.btn {
      width: 100%;
    }
  }

  a.nav-link {
    color: #ffffff !important;
    width: 100%;
    padding: 0;
  }

  ul.navbar-nav.btn-group {
    width: 100%;
    justify-content: center;
    border-bottom: 1px solid #000000;
    padding-bottom: 10px;
  }

  a.navbar-brand {
    border: 1px solid #000000;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 0;
  }

  ul.navbar-nav.nav-user {
    min-width: 175px;
    justify-content: center;
    border: 1px solid #000000;
  }
  .nav-item.b-nav-dropdown {
    align-self: center;
  }
  
</style>
