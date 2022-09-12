<template>
  <div class="component">
    <div class="navbar">
      <Navbar />
    </div>
    <TabView>
      <TabPanel header="Dashboard">
        <div class="container">
          <router-view></router-view>
        </div>
      </TabPanel>
      <TabPanel header=""> </TabPanel>
      <TabPanel header=" "> </TabPanel>
      <TabPanel header=""> </TabPanel>
      <TabPanel header=""> </TabPanel>
      <TabPanel header=""> </TabPanel>
      <TabPanel header=""> </TabPanel>
      <TabPanel header=""> </TabPanel>
      <TabPanel header=""> </TabPanel>
      <TabPanel header=""> </TabPanel>
      <TabPanel header=""> </TabPanel>
      <TabPanel header=""> </TabPanel>
        <TabPanel header=""> </TabPanel>
    </TabView>
  </div>
</template>
<script>
import Navbar from "@/components/shared/Navbar.vue";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

export default {
  components: { Navbar, TabView, TabPanel },
};
</script>
<style>
@import "primevue/resources/themes/lara-dark-blue/theme.css ";
@import "primevue/resources/primevue.min.css";
@import "primeicons/primeicons.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
}
.navbar {
  grid-area: navegacao;
}
.container {
  grid-area: container;
}
.component {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 2fr 10fr;

  grid-template-areas: "navegacao container";
}
.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
background-color:#AAA9A9 ;
color: #030303;
border-color:none

}
.p-tabview-nav-link{

}
.p-tabview .p-tabview-nav li .p-tabview-nav-link {
  border:none;

  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  font-weight: 300;
  font-size:15px;
  height: 100%;
   margin-right:1px;
}
.p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link{
  background-color: gray;
}
.p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled) .p-tabview-nav-link {
background-color:#AAA9A9 ;
color: #030303;
border-color:none;
width: 100px;

}
.p-tabview .p-tabview-panels {
  background-color:#F2F2F2 ;
  padding: 0px;
}
.p-tabview .p-tabview-nav{
  border: none;
}

</style>