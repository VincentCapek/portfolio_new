<script setup>
import ContactForm from '@components/contact/ContactForm.vue';
import ContactSocialIcons from '@components/contact/ContactSocialIcons.vue';
</script>

<template>
    <section id="contact" class="contact pt-0">
        <div class="container">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-12 col-md-5">
                        <!-- Intro -->
                        <div class="tl-widget heading">
                            <h3 class="title m-0">
                                <span class="title-before">Schedule a call with me to see if</span>
                                I can help
                            </h3>
                            <p>Reach out to me today and let’s discuss how I can help you achieve your goals.</p>
                        </div>
                        <!-- Icon List -->
                        <ul class="contact-icon-list list-unstyled my-4">
                            <!-- Icon List Item -->
                            <li class="icon-list-item">
                                <a href="#">
                                    <span class="icon-list-icon">
                                        <svg class="svg-inline--fa fa-phone" aria-hidden="true" focusable="false"
                                            data-prefix="fas" data-icon="phone" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="icon-list-text">07 69 21 61 37</span>
                                </a>
                            </li>
                            <!-- Icon List Item -->
                            <li class="icon-list-item">
                                <a href="#">
                                    <span class="icon-list-icon">
                                        <svg class="svg-inline--fa fa-map" aria-hidden="true" focusable="false"
                                            data-prefix="fas" data-icon="map" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="icon-list-text">Manosque, France</span>
                                </a>

                            </li>
                            <!-- Icon List Item -->
                            <li class="icon-list-item">
                                <a href="#">
                                    <span class="icon-list-icon">
                                        <svg class="svg-inline--fa fa-envelope-open" aria-hidden="true"
                                            focusable="false" data-prefix="fas" data-icon="envelope-open" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M64 208.1L256 65.9 448 208.1v47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5V208.1zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V208.1c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="icon-list-text">vincentcapek@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                        <!-- Social Icons -->
                        <ContactSocialIcons />
                    </div>
                    <div class="col-12 col-md-6">
                        <!-- Contact Form -->
                        <div id="tl-contact-form" class="tl-form mt-4 mt-md-0">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>