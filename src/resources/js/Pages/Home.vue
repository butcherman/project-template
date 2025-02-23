<script setup lang="ts">
import AuthLayout from "@/Layouts/Auth/AuthLayout.vue";
import Card from "@/Components/_Base/Card.vue";
</script>

<script lang="ts">
export default { layout: AuthLayout };
</script>

<template>
    <div class="flex items-center justify-center h-screen">
        <Card class="w-full md:w-3/4 mx-2">
            <h1 class="text-center">Hello World</h1>
            <h3 class="text-center">Landing Page</h3>
            <hr />
            <ul>
                <li>
                    <Link :href="$route('login')">Login Page</Link>
                </li>
                <li>
                    <Link :href="$route('components.index')">
                        Component Example Page
                    </Link>
                </li>
            </ul>
        </Card>
    </div>
</template>
