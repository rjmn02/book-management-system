'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">book-management-system documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-04e0336f3f78a05698225c25ca4542ba7c5d328c6258b5fd3822bb919efc6b45e2834f5a3f5519c5cb20d67801127cdcb9fbfc362889b0709b1742892fa651e3"' : 'data-bs-target="#xs-controllers-links-module-AppModule-04e0336f3f78a05698225c25ca4542ba7c5d328c6258b5fd3822bb919efc6b45e2834f5a3f5519c5cb20d67801127cdcb9fbfc362889b0709b1742892fa651e3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-04e0336f3f78a05698225c25ca4542ba7c5d328c6258b5fd3822bb919efc6b45e2834f5a3f5519c5cb20d67801127cdcb9fbfc362889b0709b1742892fa651e3"' :
                                            'id="xs-controllers-links-module-AppModule-04e0336f3f78a05698225c25ca4542ba7c5d328c6258b5fd3822bb919efc6b45e2834f5a3f5519c5cb20d67801127cdcb9fbfc362889b0709b1742892fa651e3"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-04e0336f3f78a05698225c25ca4542ba7c5d328c6258b5fd3822bb919efc6b45e2834f5a3f5519c5cb20d67801127cdcb9fbfc362889b0709b1742892fa651e3"' : 'data-bs-target="#xs-injectables-links-module-AppModule-04e0336f3f78a05698225c25ca4542ba7c5d328c6258b5fd3822bb919efc6b45e2834f5a3f5519c5cb20d67801127cdcb9fbfc362889b0709b1742892fa651e3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-04e0336f3f78a05698225c25ca4542ba7c5d328c6258b5fd3822bb919efc6b45e2834f5a3f5519c5cb20d67801127cdcb9fbfc362889b0709b1742892fa651e3"' :
                                        'id="xs-injectables-links-module-AppModule-04e0336f3f78a05698225c25ca4542ba7c5d328c6258b5fd3822bb919efc6b45e2834f5a3f5519c5cb20d67801127cdcb9fbfc362889b0709b1742892fa651e3"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-6ba72b9934a78696a7c61ebe7c9cd06e974c505987f5f30b478eaa6bd6ac013f7c4bdfb768a4ee077d2ad2cc84b006c0534e8ba32c39a30ab5458a12088be1c0"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-6ba72b9934a78696a7c61ebe7c9cd06e974c505987f5f30b478eaa6bd6ac013f7c4bdfb768a4ee077d2ad2cc84b006c0534e8ba32c39a30ab5458a12088be1c0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-6ba72b9934a78696a7c61ebe7c9cd06e974c505987f5f30b478eaa6bd6ac013f7c4bdfb768a4ee077d2ad2cc84b006c0534e8ba32c39a30ab5458a12088be1c0"' :
                                            'id="xs-controllers-links-module-AuthModule-6ba72b9934a78696a7c61ebe7c9cd06e974c505987f5f30b478eaa6bd6ac013f7c4bdfb768a4ee077d2ad2cc84b006c0534e8ba32c39a30ab5458a12088be1c0"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-6ba72b9934a78696a7c61ebe7c9cd06e974c505987f5f30b478eaa6bd6ac013f7c4bdfb768a4ee077d2ad2cc84b006c0534e8ba32c39a30ab5458a12088be1c0"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-6ba72b9934a78696a7c61ebe7c9cd06e974c505987f5f30b478eaa6bd6ac013f7c4bdfb768a4ee077d2ad2cc84b006c0534e8ba32c39a30ab5458a12088be1c0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-6ba72b9934a78696a7c61ebe7c9cd06e974c505987f5f30b478eaa6bd6ac013f7c4bdfb768a4ee077d2ad2cc84b006c0534e8ba32c39a30ab5458a12088be1c0"' :
                                        'id="xs-injectables-links-module-AuthModule-6ba72b9934a78696a7c61ebe7c9cd06e974c505987f5f30b478eaa6bd6ac013f7c4bdfb768a4ee077d2ad2cc84b006c0534e8ba32c39a30ab5458a12088be1c0"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthorsModule.html" data-type="entity-link" >AuthorsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthorsModule-b8bc23facfca6c75f9b1cec76e3f08fb4b50bbf5c394d3a56abf3b123e7566f9b72069e0f9a9fde6f1c001e45a78be00c69360a3a5675d245266949c34cf691b"' : 'data-bs-target="#xs-controllers-links-module-AuthorsModule-b8bc23facfca6c75f9b1cec76e3f08fb4b50bbf5c394d3a56abf3b123e7566f9b72069e0f9a9fde6f1c001e45a78be00c69360a3a5675d245266949c34cf691b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthorsModule-b8bc23facfca6c75f9b1cec76e3f08fb4b50bbf5c394d3a56abf3b123e7566f9b72069e0f9a9fde6f1c001e45a78be00c69360a3a5675d245266949c34cf691b"' :
                                            'id="xs-controllers-links-module-AuthorsModule-b8bc23facfca6c75f9b1cec76e3f08fb4b50bbf5c394d3a56abf3b123e7566f9b72069e0f9a9fde6f1c001e45a78be00c69360a3a5675d245266949c34cf691b"' }>
                                            <li class="link">
                                                <a href="controllers/AuthorsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthorsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthorsModule-b8bc23facfca6c75f9b1cec76e3f08fb4b50bbf5c394d3a56abf3b123e7566f9b72069e0f9a9fde6f1c001e45a78be00c69360a3a5675d245266949c34cf691b"' : 'data-bs-target="#xs-injectables-links-module-AuthorsModule-b8bc23facfca6c75f9b1cec76e3f08fb4b50bbf5c394d3a56abf3b123e7566f9b72069e0f9a9fde6f1c001e45a78be00c69360a3a5675d245266949c34cf691b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthorsModule-b8bc23facfca6c75f9b1cec76e3f08fb4b50bbf5c394d3a56abf3b123e7566f9b72069e0f9a9fde6f1c001e45a78be00c69360a3a5675d245266949c34cf691b"' :
                                        'id="xs-injectables-links-module-AuthorsModule-b8bc23facfca6c75f9b1cec76e3f08fb4b50bbf5c394d3a56abf3b123e7566f9b72069e0f9a9fde6f1c001e45a78be00c69360a3a5675d245266949c34cf691b"' }>
                                        <li class="link">
                                            <a href="injectables/AuthorsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthorsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BooksModule.html" data-type="entity-link" >BooksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BooksModule-023b3b0ed29d1a43de5e7e31be39325ad26edbb7b43e58265a96b4442c3cabcff35bd4fce8f6ec0d9dbae5ea353da346c5e0953ec5a7b93168e6fa1742af5e3f"' : 'data-bs-target="#xs-controllers-links-module-BooksModule-023b3b0ed29d1a43de5e7e31be39325ad26edbb7b43e58265a96b4442c3cabcff35bd4fce8f6ec0d9dbae5ea353da346c5e0953ec5a7b93168e6fa1742af5e3f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BooksModule-023b3b0ed29d1a43de5e7e31be39325ad26edbb7b43e58265a96b4442c3cabcff35bd4fce8f6ec0d9dbae5ea353da346c5e0953ec5a7b93168e6fa1742af5e3f"' :
                                            'id="xs-controllers-links-module-BooksModule-023b3b0ed29d1a43de5e7e31be39325ad26edbb7b43e58265a96b4442c3cabcff35bd4fce8f6ec0d9dbae5ea353da346c5e0953ec5a7b93168e6fa1742af5e3f"' }>
                                            <li class="link">
                                                <a href="controllers/BooksController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BooksModule-023b3b0ed29d1a43de5e7e31be39325ad26edbb7b43e58265a96b4442c3cabcff35bd4fce8f6ec0d9dbae5ea353da346c5e0953ec5a7b93168e6fa1742af5e3f"' : 'data-bs-target="#xs-injectables-links-module-BooksModule-023b3b0ed29d1a43de5e7e31be39325ad26edbb7b43e58265a96b4442c3cabcff35bd4fce8f6ec0d9dbae5ea353da346c5e0953ec5a7b93168e6fa1742af5e3f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BooksModule-023b3b0ed29d1a43de5e7e31be39325ad26edbb7b43e58265a96b4442c3cabcff35bd4fce8f6ec0d9dbae5ea353da346c5e0953ec5a7b93168e6fa1742af5e3f"' :
                                        'id="xs-injectables-links-module-BooksModule-023b3b0ed29d1a43de5e7e31be39325ad26edbb7b43e58265a96b4442c3cabcff35bd4fce8f6ec0d9dbae5ea353da346c5e0953ec5a7b93168e6fa1742af5e3f"' }>
                                        <li class="link">
                                            <a href="injectables/BooksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-cdf931cf3af03bab6c98fd9b233160df7015cd9e3db87fa76017cc61e3d5b5afc08d0d4130c6a838ab53297d3d7d14d6571e94a2956fde7402d8b67d1df3ec1b"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-cdf931cf3af03bab6c98fd9b233160df7015cd9e3db87fa76017cc61e3d5b5afc08d0d4130c6a838ab53297d3d7d14d6571e94a2956fde7402d8b67d1df3ec1b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-cdf931cf3af03bab6c98fd9b233160df7015cd9e3db87fa76017cc61e3d5b5afc08d0d4130c6a838ab53297d3d7d14d6571e94a2956fde7402d8b67d1df3ec1b"' :
                                        'id="xs-injectables-links-module-PrismaModule-cdf931cf3af03bab6c98fd9b233160df7015cd9e3db87fa76017cc61e3d5b5afc08d0d4130c6a838ab53297d3d7d14d6571e94a2956fde7402d8b67d1df3ec1b"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-3e35abba21ed21e10ca9f3c123fe187d10fc27a3c4525c73ce9c144dd43f18ed293501aa7a9f27ac50e158d67c8ef0a230f7d4ffb7536127c5d8355ef070dfd4"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-3e35abba21ed21e10ca9f3c123fe187d10fc27a3c4525c73ce9c144dd43f18ed293501aa7a9f27ac50e158d67c8ef0a230f7d4ffb7536127c5d8355ef070dfd4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-3e35abba21ed21e10ca9f3c123fe187d10fc27a3c4525c73ce9c144dd43f18ed293501aa7a9f27ac50e158d67c8ef0a230f7d4ffb7536127c5d8355ef070dfd4"' :
                                            'id="xs-controllers-links-module-UsersModule-3e35abba21ed21e10ca9f3c123fe187d10fc27a3c4525c73ce9c144dd43f18ed293501aa7a9f27ac50e158d67c8ef0a230f7d4ffb7536127c5d8355ef070dfd4"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-3e35abba21ed21e10ca9f3c123fe187d10fc27a3c4525c73ce9c144dd43f18ed293501aa7a9f27ac50e158d67c8ef0a230f7d4ffb7536127c5d8355ef070dfd4"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-3e35abba21ed21e10ca9f3c123fe187d10fc27a3c4525c73ce9c144dd43f18ed293501aa7a9f27ac50e158d67c8ef0a230f7d4ffb7536127c5d8355ef070dfd4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-3e35abba21ed21e10ca9f3c123fe187d10fc27a3c4525c73ce9c144dd43f18ed293501aa7a9f27ac50e158d67c8ef0a230f7d4ffb7536127c5d8355ef070dfd4"' :
                                        'id="xs-injectables-links-module-UsersModule-3e35abba21ed21e10ca9f3c123fe187d10fc27a3c4525c73ce9c144dd43f18ed293501aa7a9f27ac50e158d67c8ef0a230f7d4ffb7536127c5d8355ef070dfd4"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthorsController.html" data-type="entity-link" >AuthorsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BooksController.html" data-type="entity-link" >BooksController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateBookDto.html" data-type="entity-link" >CreateBookDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthorsService.html" data-type="entity-link" >AuthorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BooksService.html" data-type="entity-link" >BooksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});