<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import Card from "@/core/components/Card.vue";
import BaseButton from "@/core/components/buttons/BaseButton.vue";
import { projectStructure } from "@/wayfinder/routes";
import { appLayout } from "@/wayfinder/routes";

const props = defineProps<{}>();
</script>

<script lang="ts">
export default { layout: AuthLayout };
</script>
<template>
    <div class="flex flex-col gap-2 justify-center items-center h-screen mx-2">
        <Card>
            <h1 class="text-center border-b my-2 py-2 border-b-slate-300">
                Butcherman Project Template
            </h1>
            <div>
                <p>
                    This is a base template built for new projects. It is highly
                    opinionated (my opinion) and serves as a starting point for
                    a new project. It includes a large number of pre-defined
                    components. Most are completely custom, but some are
                    wrappers of 3rd party components.
                </p>
                <p>
                    Use the buttons below to browse the components and page
                    templates.
                </p>
            </div>
            <div class="flex justify-center gap-2">
                <BaseButton
                    text="Project Structure"
                    :href="projectStructure.url()"
                />
                <BaseButton text="Layout" :href="appLayout.url()" />
                <BaseButton text="Typography" />
                <BaseButton text="Core Components" />
                <BaseButton text="Data Gathering Components" />
                <BaseButton text="Forms and Form Based Components" />
            </div>
        </Card>
        <div class="flex justify-center gap-3">
            <Card title="Docker Environment">
                <p class="mb-3">
                    The backend is supported by a series of Docker images. Each
                    image is described below:
                </p>
                <ul class="mx-4 flex flex-col gap-3">
                    <li>
                        <h5 class="border-b border-b-slate-300">PHP 8.5-FPM</h5>
                        <p>
                            This is the heart and sole of the project. All
                            project logic is served from a container running
                            this image. The list of containers useing this image
                            are:
                        </p>
                        <ul class="mx-4">
                            <li>
                                <strong>Application Image</strong> - Primary
                                image that the NGINX web server proxies all data
                                to.
                            </li>
                            <li>
                                <strong>Reverb Image</strong> - This image is
                                responsible for any WebSocket communication.
                            </li>
                            <li>
                                <strong>Horizon Image</strong> - This image is
                                Running Laravel Horizon to process any
                                background jobs in the Laravel Work Queue.
                            </li>
                            <li>
                                <strong>Scheduler Image</strong> - This image
                                processes all scheduled tasks.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h5 class="border-b border-b-slate-300">NGINX</h5>
                        <p>
                            Primary Web Server that will proxy all incoming
                            traffic to the proper location.
                        </p>
                    </li>
                    <li>
                        <h5 class="border-b border-b-slate-300">MySQL 9.4</h5>
                        <p>
                            Database image that will hold all application data.
                        </p>
                    </li>
                    <li>
                        <h5 class="border-b border-b-slate-300">Redis</h5>
                        <p>
                            Redis image stores volitaile memory data such as
                            application cache and session information.
                        </p>
                    </li>
                </ul>
            </Card>
            <Card title="Application Environment">
                <p>The primary components of the application are:</p>
                <ul class="mx-4 flex flex-col gap-1">
                    <li>
                        <h5 class="border-b border-b-slate-300">Laravel 13</h5>
                        <p>
                            Laravel 13 along with these additional packages make
                            up the back end.
                        </p>
                        <ul class="mx-4">
                            <li>
                                <strong>Fortify</strong> for secure
                                Authentication
                            </li>
                            <li>
                                <strong>Horizon</strong> for worker queue and
                                job processing
                            </li>
                            <li>
                                <strong>Telescope</strong> for troubleshooting
                                assistance
                            </li>
                            <li>
                                <strong>Wayfinder</strong> for bringing Laravel
                                Route data to the Vue Front End
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h5 class="border-b border-b-slate-300">Vue 3</h5>
                        Frontend JavaScript Framework
                    </li>
                    <li>
                        <h5 class="border-b border-b-slate-300">InertiaJS 3</h5>
                        Seamlessly tie the front end and back end together
                    </li>
                    <li>
                        <h5 class="border-b border-b-slate-300">
                            TailwindCSS 4
                        </h5>
                        Styling for the front end
                    </li>
                </ul>
            </Card>
        </div>
    </div>
</template>
