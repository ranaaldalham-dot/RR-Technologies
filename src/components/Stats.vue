<template>
  <section class="py-16 sm:py-20 bg-white dark:bg-gray-900">
    <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 sm:gap-x-10 text-center px-4">
      <div class="flex flex-col items-center space-y-2">
        <img src="/src/assets/Img/StatsSection/projects.png" class="w-10 sm:w-12" alt="Projects Icon" />
        <p class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white capitalize"> 
          {{ $t('stats.projects.label') }} 
        </p>
        <span class="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-semibold"> 
          {{ $t('stats.projects.number') }} 
        </span>
      </div>
      <div class="flex flex-col items-center space-y-2">
        <img src="/src/assets/Img/StatsSection/clients.png" class="w-10 sm:w-12" alt="Clients Icon" />
        <p class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white capitalize"> 
          {{ $t('stats.clients.label') }}  
        </p>
        <span class="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-semibold"> 
          {{ $t('stats.clients.number') }}  
        </span>
      </div>
      <div class="flex flex-col items-center space-y-2">
        <img src="/src/assets/Img/StatsSection/experience.png" class="w-10 sm:w-12" alt="Experience Icon" />
        <p class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white capitalize"> 
          {{ $t('stats.experience.label') }}
        </p>
        <span class="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-semibold"> 
          {{ $t('stats.experience.number') }} 
        </span>
      </div>
      <div class="flex flex-col items-center space-y-2">
        <img src="/src/assets/Img/StatsSection/company.png" class="w-10 sm:w-12" alt="Company Icon" />
        <p class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white capitalize"> 
          {{ $t('stats.company.label') }} 
        </p>
        <span class="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-semibold"> 
          {{ $t('stats.company.number') }} 
        </span>
      </div>
    </div>
  </section>
</template>
