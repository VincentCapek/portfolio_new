<template>
    <header>
        <nav id="navbar" data-aos="zoom-out" data-aos-delay="800"
            class="navbar p-navbar navbar-expand aos-init aos-animate">
            <div class="container header">
                <a class="navbar-brand site-title">Vincent</a>
                <div class="ms-auto ms-md-0"></div>
                <ul id="primary" class="navbar-nav items">
                    <li class="menu-item menu-item-type-custom menu-item-object-custom nav-item">
                        <NuxtLink to="/" class="nav-link smooth-anchor">Services</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom nav-item">
                        <NuxtLink to="/about" class="nav-link smooth-anchor">Resume</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom nav-item">
                        <NuxtLink to="/services" class="nav-link smooth-anchor">Works</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom nav-item">
                        <NuxtLink to="/works" class="nav-link smooth-anchor">Skills</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom nav-item">
                        <NuxtLink to="/testimonials" class="nav-link smooth-anchor">Testimonials</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom nav-item">
                        <NuxtLink to="/contact" class="nav-link smooth-anchor">Contact</NuxtLink>
                    </li>
                </ul>
                <ul class="navbar-nav toggle">
                    <li class="nav-item">
                        <NuxtLink to="#" class="nav-link pe-0" data-bs-toggle="modal" data-bs-target="#menu">
                            <i class="icon-menu m-0"></i>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>