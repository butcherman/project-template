<script setup lang="ts">
import BaseButton from "@/core/components/buttons/BaseButton.vue";
import UserAvatar from "./UserAvatar.vue";
import UserSettingsMenu from "@/features/user/components/UserSettingsMenu.vue";
import { ref } from "vue";

defineEmits<{
    toggleNavbar: [];
}>();

const settingsOpen = ref<boolean>(false);
</script>

<template>
    <header
        class="fixed top-0 left-0 z-20 w-full h-14 bg-white flex flex-row border-b border-b-slate-200"
    >
        <Link href="/">
            <img class="max-h-full px-4 py-1" src="/images/generic_logo.webp" />
        </Link>
        <h1 class="hidden md:flex md:grow items-center justify-center">
            Application Template
        </h1>
        <div
            class="relative grow md:grow-0 flex items-center justify-end gap-2 me-2"
        >
            <div v-on-click-outside="() => (settingsOpen = false)">
                <UserAvatar @click="settingsOpen = true" />
                <UserSettingsMenu
                    class="fixed top-13 right-5 bg-white"
                    v-model="settingsOpen"
                />
            </div>
            <BaseButton
                class="lg:hidden"
                icon="bars"
                variant="light"
                @click="$emit('toggleNavbar')"
            />
        </div>
    </header>
</template>
