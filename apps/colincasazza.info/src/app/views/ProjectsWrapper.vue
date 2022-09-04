<template>
  <div class="app-view-port w-full h-full text-white text-left break-words">
    <div v-for="category in categories" :key="category?.subject">
      <div v-for="item in category?.items" :key="item.heading">
        <div class="app-heading">
          {{ item.heading }}
        </div>
        <router-link class="link" :to="item.link">{{
          getFullLink(item)
        }}</router-link>
        <div class="text-sm" v-html="item.text"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class ProjectsWrapper extends Vue {
  getFullLink(item: { link: string }): string {
    return (window.location.origin || 'colincasazza.info') + item.link;
  }

  categories = [];

  /**
  // ! this (and router objects) should both be coming
  // ! from the same source. [refactor]
  categories = [
    {
      subject: "animation",
      items: [
        {
          heading: "flocking",
          text: `simulated flocking behavior based on separation, alignment, and cohesion. implemented w/ rust/wasm, inspired by <a class='link' href='https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html'>thecodingtrain.com<a/>.`,
          link: "/projects/three/flock",
          sourceCodeLink:
            "https://github.com/colanzio5/colincasazza.info/tree/wasm-flock/wasm-lib/src/flock",
        },
        // {
        //   heading: "nbody",
        //   text: "simple nbody simulation w/ <a class='link' href='https://rapier.rs/'>rapier</a> physics engine.",
        //   link: "/projects/three/nbody",
        //   sourceCodeLink: "",
        // },
        // {
        //   heading: "perspective vs ortho camera demo",
        //   text: "a quick three.js camera demo, taken from the three.js website's examples and implemented in vue3. <a class='link' href='https://threejs.org/examples/#webgl_camera'>here's</a> the original implementation.",
        //   link: "/projects/three/camera-types",
        //   sourceCodeLink: "",
        // },
      ],
    },
    {
      subject: "notebooks",
      items: [
        {
          heading: "inverse kinematics approximation",
          text: "apromixation of a 2d inverse kinematic function.",
          link: "/projects/notebooks/2d-inverse-kinematics",
          sourceCodeLink: "",
        },
      ],
    },
    process.env.NODE_ENV !== "production"
      ? {
          subject: "debug",
          items: [
            {
              heading: "2d terrain generation",
              text: "paramaterized terrain generation with simplex3 noise.",
              link: "/debug/terrain-generation",
              sourceCodeLink: "",
            },
            {
              heading: "multiple viewports",
              text: "rendering to multiple virtual viewports in the same renderer",
              link: "/debug/multi-viewport",
              sourceCodeLink: "",
            },
            {
              heading: "ray tracing renderer",
              text: "use a secondary renderer for a viewport instead of default three one, whithout killing performance. in this case, use a raytracing renderer.",
              link: "/debug/raytrace",
              sourceCodeLink: "",
            },
            {
              heading: "topology generation",
              text: "procedurally generate 2d topology [terrain] maps.",
              link: "/debug/topology",
              sourceCodeLink: "",
            },
            {
              heading: "xwords",
              text: "realtime, collaborative crosswords.",
              link: "/debug/xwords",
              sourceCodeLink: "",
            },
          ],
        }
      : null,
  ];
  **/
}
</script>
