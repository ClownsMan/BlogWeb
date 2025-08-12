<script setup lang="ts"></script>

<template>
  <footer class="footer-container">
    <div class="footer-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-gray-600">© 2023 技术博客. 保留所有权利.</p>
        </div>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <span class="sr-only">GitHub</span>
            <GitHub />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <span class="sr-only">Twitter</span>
            <Tweet />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <span class="sr-only">LinkedIn</span>
            <Link />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  margin-top: auto;
}

.footer-content {
  text-align: center;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .footer-content {
    padding: 15px;
  }
}
</style>