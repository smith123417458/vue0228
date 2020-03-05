<template>
  <div>
    <header>
      <Navbar />
    </header>

    <!-- 所有會變動的頁面都在 main 標籤 -->
    <main>
      <router-view  />
    </main>
    
     <footer>
      <Footer />
    </footer>

  <!-- 之後footer 和其它組件要加進來 -->
   
  </div>
</template>


<script>
export default {
  components: {
 
    Navbar: () => import('@/components/Navbar'),
 
  //之後footer要加進來
   Footer: () => import('@/components/Footer'),





}}
</script>
