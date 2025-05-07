<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMenuOpen.value = false
  }
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full bg-blue-500 py-4">
    <div class="container mx-auto px-4">
      <!-- Top row with hamburger and social icons -->
      <div class="flex items-center justify-between mb-4">
        <!-- Hamburger Menu Button (Mobile) -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white hover:text-gray-200 focus:outline-none"
          aria-label="Toggle menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-4 uppercase">
          <a @click.prevent="scrollToSection('tour')" href="#"
            class="text-white hover:text-gray-200 transition-colors cursor-pointer">Tour</a>
          <a @click.prevent="scrollToSection('music')" href="#"
            class="text-white hover:text-gray-200 transition-colors cursor-pointer">Music</a>
          <a @click.prevent="scrollToSection('contact')" href="#"
            class="text-white hover:text-gray-200 transition-colors cursor-pointer">Contact</a>
        </nav>

        <!-- Desktop Social Icons -->
        <div class="hidden md:flex items-center space-x-4">
          <a href="#" class="text-white hover:text-gray-200 transition-colors" aria-label="Instagram">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="#" class="text-white hover:text-gray-200 transition-colors" aria-label="Spotify">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Centered Title -->
      <div class="flex justify-center">
        <h1 class="font-sans text-white uppercase text-3xl drop-shadow-[0_2px_2px_rgba(220,38,38,1.0)]">
          Staring in Spaces
        </h1>
      </div>

      <!-- Mobile Navigation Menu -->
      <div v-show="isMenuOpen" class="absolute top-full left-0 w-full bg-blue-500 md:hidden">
        <nav class="flex flex-col py-4">
          <a @click.prevent="scrollToSection('tour')" href="#"
            class="text-white hover:text-gray-200 px-4 py-2 transition-colors cursor-pointer">Tour</a>
          <a @click.prevent="scrollToSection('music')" href="#"
            class="text-white hover:text-gray-200 px-4 py-2 transition-colors cursor-pointer">Music</a>
          <a @click.prevent="scrollToSection('contact')" href="#"
            class="text-white hover:text-gray-200 px-4 py-2 transition-colors cursor-pointer">Contact</a>

          <!-- Mobile Social Icons -->
          <div class="flex items-center space-x-4 px-4 py-4 mt-2 border-t border-blue-400">
            <a href="#" class="text-white hover:text-gray-200 transition-colors" aria-label="Instagram">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" class="text-white hover:text-gray-200 transition-colors" aria-label="Spotify">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section id="hero"
      class="mt-header h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style="background-image: url('/img/sis-hero.jpg');">
    </section>

    <!-- Tour Section -->
    <section id="tour" class="h-screen bg-gradient-to-b from-purple-600 to-purple-800 flex items-center justify-center">
      <div class="text-center text-white">
        <h2 class="text-5xl font-bold mb-4">Tour Dates</h2>
      </div>
    </section>

    <!-- Music Section -->
    <section id="music" class="h-screen bg-gradient-to-b from-pink-600 to-pink-800 flex items-center justify-center">
      <div class="text-center text-white">
        <h2 class="text-5xl font-bold mb-4">Music</h2>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact"
      class="h-screen bg-gradient-to-b from-indigo-600 to-indigo-800 flex items-center justify-center">
      <div class="text-center text-white">
        <h2 class="text-5xl font-bold mb-4">Contact</h2>
      </div>
    </section>
  </main>
</template>

<style scoped>
header {
  z-index: 50;
}

.mt-header {
  margin-top: 108px;
}
</style>
