<template>
  <div class="container-fluid">
    <div class="row">
      <nav class="packages-list col-md-4 d-none d-md-block bg-light sidebar">
        <div class="position-sticky">
          <div class="list-group list-group-flush">
            <a href="#" v-for="pkg in packages" :key="pkg.id" 
              class="list-group-item list-group-item-action py-2 ripple" 
              aria-current="true"
              @click="selectPackage(pkg)">
              <div class="package-name">{{ pkg.name }}</div>
              <div class="package-headline">{{ pkg.headline }}</div>
            </a>
          </div>
        </div>
      </nav>
      <main role="main" class="col-md-8 ml-sm-auto px-4">
        <div v-if="selectedPackage.id" class="package-details">
          <div>
            <h1>Package Details</h1>
              <div class="row">
                <div class="col-md-4">
                  <div class="package-name">{{ selectedPackage.name }}</div>
                  <div class="package-license">
                    <span>License:</span> {{ selectedPackage.license }}
                  </div>
                  <div class="package-date">
                    <span>Date:</span> {{ selectedPackage.createdAt }}
                  </div>
                </div>
                <div class="col-md-8 package-version">{{ selectedPackage.version }}</div>
              </div>
              
              <div class="package-description">
                {{ selectedPackage.description }}
              </div>

              <div class="package-dependencies">
                <span>Dependencies:</span> {{ selectedPackage.dependencies.join(", ") }}
              </div>

              <div class="package-imports">
                <span>Imports:</span> {{ selectedPackage.imports.join(", ") }}
              </div>

              <div class="package-authors">
                <span>Authors:</span> {{ selectedPackage.authors.join(", ") }}
              </div>
          </div>
          <hr />
          <div>
            <h3>Add Comment</h3>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';

  type Package = {
    id: number;
    name: string;
    headline: string;
  }
  
  export default defineComponent({
    name: 'PackagesView',
    data() {
      return {
        packages: [] as Array<Package>,
        selectedPackage: {} as Package
      };
    },
    created() {
      this.fetchPackages();
    },
    watch:{
      $route (to, from){
        if (from.query.packageName !== to.query.packageName) {
          this.fetchPackages();
        }
      }
    } ,
    methods: {
      async fetchPackages() {
        try {
          const packageName = this.$router.currentRoute.value.query.packageName;
          const response = await axios.get(`http://localhost:3000/package${packageName ? '?packageName=' + packageName : ''}`);
          this.packages = response.data;
        } catch (error) {
          console.error('Error fetching packages:', error);
        }
      },
      async selectPackage(pkg: Package) {
        this.selectedPackage = pkg;
      },
    },
  });
  </script>
  
<style scoped>
h1 {
  color: #42b983;
}

nav.packages-list {
  margin-top: 50px;
  padding: 0px;
}

main {
  margin-top: 50px;
  padding: 0px;
}

main h1 {
  text-align: left;
  color: #ebc134;
  margin-top: 20px;
}

main h3 {
  text-align: left;
}

nav.packages-list .package-name {
  text-align: left;
  font-weight: bold;
  font-size: 1.2em;
}

div.package-headline {
  text-align: left;
  font-weight: normal;
  font-size: 0.8em;
}

.package-details .package-name {
  text-align: left;
  font-size: 1.4em;
  font-weight: bold;
}

.package-details .package-version {
  text-align: right;
  font-size: 1.6em;
  font-weight: bold;
  color: #9e9e9e;
}

.package-details .package-license, 
.package-details .package-date, 
.package-details .package-dependencies, 
.package-details .package-imports, 
.package-details .package-authors {
  text-align: left;
  font-size: 1.1em;
}


.package-details .package-description,
.package-details .package-dependencies,
.package-details .package-imports,
.package-details .package-authors {
  margin-top: 30px;
}

.package-details .package-license span, 
.package-details .package-date span, 
.package-details .package-dependencies span, 
.package-details .package-imports span, 
.package-details .package-authors span {
  font-weight: bold;
}

.package-details .package-description {
  text-align: left;
  font-size: 1em;
}
</style>