<template>
    <div class="bg-[#07031C] h-screen">
        <div class="nav"><img src="../assets/book.svg" alt="book icon"></div>
        <div class="flex flex-col items-center w-full border-red-500 border">
            <div id="content" class="mx-auto ">
                <RouterLink to="/dictionary" class=" px-9 py-4 bg-[#5D5FEF] text-white rounded-full inline-block ">
                    <button class="dict-page mx-auto">Continue</button>
                </RouterLink>
            </div>
            <p class="text-white">Stitched and held together with lots of <em class="line-through">love</em> duct tape by
                @geed__et </p>
            <p class="text-white">Powered by <a href="#">Free Dictionary API</a></p>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>