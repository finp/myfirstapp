var jsonQuery = require('json-query')

var data =
{
  "show": {
    "projectTemplates": [{
      "id": "bare_project",
      "priority": 0.97,
      "name": "Empty Project",
      "description": "An empty project into which you can add apps and cloud instances",
      "type": "default",
      "icon": "icon-circle-blank",
      "category": "Blank",
      "screenshots": [{
        "url": "public/img/templatePreview/blankproject_container.png"
      }],
      "appTemplates": []
    }, {
      "id": "sync_project",
      "priority": 0.41,
      "name": "Sync Framework Project",
      "description": "An example Project using our Sync framework",
      "type": "default",
      "icon": "icon-refresh",
      "category": "Samples",
      "screenshots": [],
      "appTemplates": [{
        "id": "sync_cloud",
        "name": "Sync Cloud App",
        "type": "cloud_nodejs",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/sync-cloud/master/README.md",
        "repoUrl": "git://github.com/feedhenry-templates/sync-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/sync-cloud.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-cloud",
        "category": "Sample Apps",
        "forcedSelection": true
      }, {
        "id": "sync_app",
        "name": "Sync App",
        "type": "client_advanced_hybrid",
        "repoUrl": "git://github.com/feedhenry-templates/sync-cordova-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/sync-cordova-app.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-cordova",
        "category": "Sample Apps",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/sync_app/cordova-sync.png"
        }]
      }, {
        "id": "sync_ios_objectivec_app",
        "name": "Sync iOS (Objective-C) App",
        "type": "client_native_ios",
        "repoUrl": "git://github.com/feedhenry-templates/sync-ios-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/sync-ios-app.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-apple",
        "category": "Sample Apps",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/sync_app/ios-sync.png"
        }]
      }, {
        "id": "sync_ios_swift_app",
        "name": "Sync iOS (Swift) App",
        "type": "client_native_ios",
        "repoUrl": "git://github.com/feedhenry-templates/sync-ios-swift.git",
        "githubUrl": "https://github.com/feedhenry-templates/sync-ios-swift.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-apple",
        "category": "Sample Apps",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/sync_app/ios-sync.png"
        }]
      }, {
        "id": "sync_android_app",
        "name": "Sync Android App",
        "type": "client_native_android",
        "repoUrl": "git://github.com/feedhenry-templates/sync-android-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/sync-android-app.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-android",
        "category": "Sample Apps",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/sync_app/android-sync.png"
        }]
      }, {
        "id": "sync_windows_app",
        "name": "Sync Windows App",
        "type": "client_native_windowsuniversal",
        "repoUrl": "git://github.com/feedhenry-templates/sync-windows-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/sync-windows-app.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-windows8",
        "category": "Sample Apps",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/sync_app/windows-sync.png"
        }]
      }, {
        "id": "sync_xamarin_app",
        "name": "Sync Xamarin App",
        "type": "client_xamarin",
        "repoUrl": "git://github.com/feedhenry-templates/sync-xamarin-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/sync-xamarin-app.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-xamarin",
        "category": "Sample Apps",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/sync_app/android-sync.png"
        }]
      }]
    }, {
      "id": "saml_project",
      "priority": 0.45,
      "name": "SAML Example Project",
      "description": "An example SAML Project to be used in conjuction with a SAML Service",
      "type": "default",
      "icon": "icon-lock",
      "category": "Samples",
      "screenshots": [],
      "appTemplates": [{
        "id": "saml_cloud",
        "name": "SAML Cloud",
        "type": "cloud_nodejs",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/saml-cloud-app/master/README.md",
        "repoUrl": "git://github.com/feedhenry-templates/saml-cloud-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/saml-cloud-app.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-cloud",
        "category": "Sample Apps",
        "forcedSelection": true
      }, {
        "id": "saml_app",
        "name": "SAML Client",
        "type": "client_advanced_hybrid",
        "repoUrl": "git://github.com/feedhenry-templates/saml-cordova-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/saml-cordova-app.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-cordova",
        "category": "Sample Apps",
        "screenshots": []
      }, {
        "id": "saml_android",
        "name": "SAML Android",
        "type": "client_native_android",
        "repoUrl": "git://github.com/feedhenry-templates/saml-android-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/saml-android-app.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-android",
        "category": "Sample Apps",
        "screenshots": []
      }, {
        "id": "saml_ios_objc",
        "name": "SAML iOS (Objective-C)",
        "type": "client_native_ios",
        "repoUrl": "git://github.com/feedhenry-templates/saml-ios-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/saml-ios-app.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-apple",
        "category": "Sample Apps",
        "screenshots": []
      }, {
        "id": "saml_ios_swift",
        "name": "SAML iOS (Swift)",
        "type": "client_native_ios",
        "repoUrl": "git://github.com/feedhenry-templates/saml-ios-swift.git",
        "githubUrl": "https://github.com/feedhenry-templates/saml-ios-swift.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-apple",
        "category": "Sample Apps",
        "screenshots": []
      }, {
        "id": "saml_windows",
        "name": "SAML Windows",
        "type": "client_native_windowsuniversal",
        "repoUrl": "git://github.com/feedhenry-templates/saml-windows-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/saml-windows-app.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-windows8",
        "category": "Sample Apps",
        "screenshots": []
      }, {
        "id": "saml_xamarin_app",
        "name": "SAML Xamarin App",
        "type": "client_xamarin",
        "repoUrl": "git://github.com/feedhenry-templates/saml-xamarin-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/saml-xamarin-app.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-xamarin",
        "category": "Sample Apps",
        "screenshots": []
      }]
    }, {
      "id": "pushstarter_project",
      "priority": 0.96,
      "name": "Push Notification Starter",
      "description": "An example project using the push server integrated in the Platform",
      "type": "default",
      "icon": "icon-plane",
      "category": "Samples",
      "screenshots": [],
      "appTemplates": [{
        "id": "pushstarter_xamarin_app",
        "name": "Simple Xamarin Push App",
        "type": "client_xamarin",
        "repoUrl": "git://github.com/feedhenry-templates/pushstarter-xamarin-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/pushstarter-xamarin-app.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-xamarin",
        "category": "Sample Apps",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/pushstarter_app/android-push.png"
        }]
      }, {
        "id": "pushstarter_android_app",
        "name": "Simple Android Push App",
        "type": "client_native_android",
        "repoUrl": "git://github.com/feedhenry-templates/pushstarter-android-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/pushstarter-android-app.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-android",
        "category": "Sample Apps",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/pushstarter_app/android-push.png"
        }]
      }, {
        "id": "pushstarter_cordova_app",
        "name": "Simple Cordova Push App",
        "type": "client_advanced_hybrid",
        "repoUrl": "git://github.com/feedhenry-templates/pushstarter-cordova-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/pushstarter-cordova-app.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-cordova",
        "category": "Sample Apps",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/pushstarter_app/cordova-push.png"
        }]
      }, {
        "id": "pushstarter_ios_objc-app",
        "name": "Simple iOS (Objective-C) Push App",
        "type": "client_native_ios",
        "repoUrl": "git://github.com/feedhenry-templates/pushstarter-ios-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/pushstarter-ios-app.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-apple",
        "category": "Sample Apps",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/pushstarter_app/ios-push.png"
        }]
      },  {
        "id": "pushstarter_ios_swift_app",
        "name": "Simple iOS (Swift) Push App",
        "type": "client_native_ios",
        "repoUrl": "git://github.com/feedhenry-templates/pushstarter-ios-swift.git",
        "githubUrl": "https://github.com/feedhenry-templates/pushstarter-ios-swift.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-apple",
        "category": "Sample Apps",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/pushstarter_app/ios-push.png"
        }]
      }, {
        "id": "hello_push_mbaas_instance",
        "name": "Cloud App",
        "type": "cloud_nodejs",
        "priority": 0.02,
        "description": "Hello World Push Notification example",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/hello-push-cloud/master/README.md",
        "repoUrl": "git://github.com/feedhenry-templates/hello-push-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/hello-push-cloud.git",
        "repoBranch": "refs/heads/master",
        "icon": "icon-cloud",
        "category": "Sample Apps",
        "forcedSelection": true
      }]
    }, {
      "id": "hello_world_project",
      "priority": 1,
      "name": "Hello World Project",
      "description": "A FeedHenry primer project with various client instances, and a cloud instance with a single endpoint",
      "type": "default",
      "icon": "icon-globe",
      "category": "Sample Projects",
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry-templates/helloworld-app/master/screenshots/blankproject_nocontainer.png"
      }],
      "appTemplates": ["hello_world_ionic_hybrid_app", "hello_world_angular_hybrid_app", "hello_world_backbone_hybrid_app", "blank_appcelerator", "helloworld_native_windows_client", "native_ios_swift_helloworld_app", "native_ios_objectivec_helloworld_app", "helloworld_native_xamarin_client", "helloworld_native_android_gradle_client", "blank_advanced_webapp", "hello_world_hybrid_app", "hello_world_mbaas_instance"]
    }, {
      "id": "appforms_project",
      "priority": 0.98,
      "name": "Forms Project",
      "description": "An AppForms project, for building Drag & Drop forms apps",
      "type": "appforms",
      "icon": "icon-tasks",
      "category": "Forms",
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry/appforms-project-client/master/screenshots/appformsproject_nocontainer.png"
      }],
      "postProcessingOptions": {},
      "configuration": {
        "createFinishMessage": "Now select some Forms & a Theme to associate with your new Forms App",
        "createFinishPath": "#projects/{{projectId}}/forms"
      },
      "appTemplates": [{
        "id": "appforms_client",
        "name": "Cordova Forms App",
        "icon": "icon-check",
        "type": "client_advanced_hybrid",
        "repoUrl": "git://github.com/feedhenry/appforms-project-client.git",
        "githubUrl": "https://github.com/feedhenry/appforms-project-client.git",
        "repoBranch": "refs/heads/master",
        "forcedSelection": true,
        "category": "Forms",
        "description": "A template App for displaying Forms",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/appforms_client/1.png"
        }]
      }, "hello_world_mbaas_instance"]
    }, {
      "id": "welcome_project",
      "priority": 0.99,
      "description": "Demonstrates many features of the FeedHenry platform. The HTML5 client uses Bootstrap 3 and Backbone.js, and the cloud portion of this app illustrates the use of MongoDB, Redis and third party APIs.",
      "name": "Welcome Project",
      "type": "other",
      "icon": "icon-edit",
      "category": "Sample Projects",
      "screenshots": [{
        "url": "public/img/templatePreview/sampleproject_nocontainer.png"
      }],
      "appTemplates": [{
        "id": "welcome_project_cloud",
        "name": "Welcome Project-cloud",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-templates/welcome-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/welcome-cloud.git",
        "repoBranch": "refs/heads/master",
        "forcedSelection": true
      }, {
        "id": "welcome_project_client",
        "name": "Welcome Project-client",
        "type": "client_advanced_hybrid",
        "repoUrl": "git://github.com/feedhenry-templates/welcome-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/welcome-app.git",
        "repoBranch": "refs/heads/master",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/welcome_project_client/1.png"
        }]
      }, {
        "id": "welcome_project_android_gradle",
        "name": "Welcome Project Android Gradle",
        "type": "client_native_android",
        "repoUrl": "git://github.com/feedhenry-templates/welcome-android-gradle.git",
        "githubUrl": "https://github.com/feedhenry-templates/welcome-android-gradle.git",
        "repoBranch": "refs/heads/master"
      }, {
        "id": "welcome_project_windows",
        "name": "Welcome Project-windows",
        "type": "client_native_windowsuniversal",
        "repoUrl": "git://github.com/feedhenry-templates/welcome-windows.git",
        "githubUrl": "https://github.com/feedhenry-templates/welcome-windows.git",
        "repoBranch": "refs/heads/master"
      }, {
        "id": "welcome_project_ios_objectivec",
        "name": "Welcome Project iOS (Objective-C)",
        "type": "client_native_ios",
        "repoUrl": "git://github.com/feedhenry-templates/welcome-ios.git",
        "githubUrl": "https://github.com/feedhenry-templates/welcome-ios.git",
        "repoBranch": "refs/heads/master"
      },
      {
        "id": "welcome_project_ios_swift",
        "name": "Welcome Project iOS (Swift)",
        "type": "client_native_ios",
        "repoUrl": "git://github.com/feedhenry-templates/welcome-ios-swift.git",
        "githubUrl": "https://github.com/feedhenry-templates/welcome-ios-swift.git",
        "repoBranch": "refs/heads/master"
      }]
    }, {
      "id": "mobile_spec_project",
      "priority": 0.42,
      "name": "Mobile Spec Project",
      "description": "A project to run automated tests for Cordova APIs and show the test results in the cloud.",
      "type": "other",
      "icon": "icon-wrench",
      "category": "Developer Tools",
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry-templates/fh-mobile-spec-app/master/Screenshot.png"
      }],
      "appTemplates": [{
        "id": "mobile_spec_project_cloud",
        "name": "Mobile Spec Cloud App",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-templates/fh-mobile-spec-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-mobile-spec-cloud.git",
        "repoBranch": "refs/heads/master",
        "forcedSelection": true
      }, {
        "id": "mobile_spec_project_client",
        "name": "Mobile Spec Cordova App",
        "type": "client_advanced_hybrid",
        "repoUrl": "git://github.com/feedhenry-templates/fh-mobile-spec-app.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-mobile-spec-app.git",
        "repoBranch": "refs/heads/master"
      }, {
        "id": "mobile_spec_project_portal",
        "name": "Mobile Spec Web Portal",
        "type": "webapp_basic",
        "repoUrl": "git://github.com/feedhenry-templates/fh-mobile-spec-portal.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-mobile-spec-portal.git",
        "repoBranch": "refs/heads/master",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/mobile_spec_project_portal/1.png"
        }, {
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/mobile_spec_project_portal/2.png"
        }]
      }]
    }, {
      "id": "wfm_project",
      "priority": 0.30,
      "name": "WFM Demo Project",
      "description": "A demo project showcasing the reusable WFM modules. Note: Using openshift.feedhenry.com access via your OpenShift account is limited to using the small OpenShift Gear. Due to WFM template's non-trivial functionality you may have stability issues using the small gear. Get Started: https://github.com/feedhenry-raincatcher/raincatcher-documentation/blob/master/Getting-Started.md",
      "type": "default",
      "icon": "icon-globe",
      "category": "Tech Preview",
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/wfm_project/wfm-mobile.png"
      }],
      "appTemplates": [{
        "id": "wfm_mobile_demo_app",
        "name": "WFM Demo Mobile App",
        "type": "client_advanced_hybrid",
        "repoUrl": "git://github.com/feedhenry-raincatcher/raincatcher-demo-mobile.git",
        "githubUrl": "https://github.com/feedhenry-raincatcher/raincatcher-demo-mobile.git",
        "repoBranch": "refs/heads/v2.1.0-alpha",
        "icon": "icon-cordova",
        "category": "Sample Apps",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/wfm_project/wfm-mobile.png"
        }]
      },{
        "id": "wfm_portal_demo_app",
        "name": "WFM Demo Portal App",
        "type": "webapp_advanced",
        "repoUrl": "git://github.com/feedhenry-raincatcher/raincatcher-demo-portal.git",
        "githubUrl": "https://github.com/feedhenry-raincatcher/raincatcher-demo-portal.git",
        "repoBranch": "refs/heads/v2.1.0-alpha",
        "category": "Sample Apps",
        "screenshots": [{
          "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/wfm_project/wfm-portal.png"
        }]
      },{
        "id": "wfm_cloud_demo_app",
        "name": "WFM Demo Cloud App",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-raincatcher/raincatcher-demo-cloud.git",
        "githubUrl": "https://github.com/feedhenry-raincatcher/raincatcher-demo-cloud.git",
        "repoBranch": "refs/heads/v2.1.0-alpha",
        "category": "Sample Apps",
        "forcedSelection": true
      }]
    }],
    "appTemplates": [{
      "id": "hello_world_hybrid_app",
      "name": "Cordova App",
      "type": "client_advanced_hybrid",
      "priority": 0.56,
      "repoUrl": "git://github.com/feedhenry-templates/helloworld-app.git",
      "githubUrl": "https://github.com/feedhenry-templates/helloworld-app.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-cordova",
      "category": "Cordova",
      "description": "An HTML5 Cordova App which echos your name via the Cloud",
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/hello_world_hybrid_app/1.png"
      }, {
        "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/hello_world_hybrid_app/2.png"
      }]
    }, {
      "id": "hello_world_mbaas_instance",
      "name": "Cloud App",
      "type": "cloud_nodejs",
      "priority": 0.02,
      "description": "Hello World Node.js Express App which echos a username",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/helloworld-cloud/master/README.md",
      "repoUrl": "git://github.com/feedhenry-templates/helloworld-cloud.git",
      "githubUrl": "https://github.com/feedhenry-templates/helloworld-cloud.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-cloud",
      "category": "Sample Apps",
      "forcedSelection": true
    }, {
      "id": "hello_world_mbaas_instance_cluster",
      "name": "Cloud App - Clustered",
      "type": "cloud_nodejs",
      "priority": 0.01,
      "description": "Clustered Hello World Node.js Express App which echos a username",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/helloworld-cloud-cluster/master/README.md",
      "repoUrl": "git://github.com/feedhenry-templates/helloworld-cloud-cluster.git",
      "githubUrl": "https://github.com/feedhenry-templates/helloworld-cloud-cluster.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-cloud",
      "category": "Sample Apps",
        "forcedSelection": true
    }, {
      "id": "blank_native_android_gradle_client",
      "name": "Blank Native Android Gradle App",
      "type": "client_native_android",
      "priority": 0.45,
      "description": "Native Android Gradle Blank App which echos your name via the Cloud",
      "repoUrl": "git://github.com/feedhenry-templates/blank-android-gradle.git",
      "githubUrl": "https://github.com/feedhenry-templates/blank-android-gradle.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-android",
      "category": "Android",
      "screenshots": []
    }, {
      "id": "native_ios_objectivec_helloworld_app",
      "name": "Native iOS (Objective-C) hello world app",
      "type": "client_native_ios",
      "priority": 0.445,
      "description": "Native iOS (Objective-C) hello world app which echos your name via the Cloud",
      "repoUrl": "git://github.com/feedhenry-templates/helloworld-ios.git",
      "githubUrl": "https://github.com/feedhenry-templates/helloworld-ios.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-apple",
      "selected": false,
      "category": "iOS",
      "screenshots": []
    }, {
      "id": "native_ios_swift_helloworld_app",
      "name": "Native iOS (Swift) hello world app",
      "type": "client_native_ios",
      "priority": 0.445,
      "description": "Native iOS (Swift) hello world app which echos your name via the Cloud",
      "repoUrl": "git://github.com/feedhenry-templates/helloworld-ios-swift.git",
      "githubUrl": "https://github.com/feedhenry-templates/helloworld-ios-swift.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-apple",
      "selected": false,
      "category": "iOS",
      "screenshots": []
    }, {
      "id": "helloworld_native_android_gradle_client",
      "name": "Helloworld Native Android Gradle App",
      "type": "client_native_android",
      "priority": 0.445,
      "description": "Native Android Hello World App using Gradle which echos your name via the Cloud",
      "repoUrl": "git://github.com/feedhenry-templates/helloworld-android-gradle.git",
      "githubUrl": "https://github.com/feedhenry-templates/helloworld-android-gradle.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-android",
      "selected": false,
      "category": "Android"
    }, {
      "id": "helloworld_native_windows_client",
      "name": "Helloworld Native Windows App",
      "type": "client_native_windowsuniversal",
      "priority": 0.445,
      "description": "Native Windows Hello World App which echos your name via the Cloud",
      "repoUrl": "git://github.com/feedhenry-templates/helloworld-windows.git",
      "githubUrl": "https://github.com/feedhenry-templates/helloworld-windows.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-windows8",
      "selected": false,
      "category": "Windows"
    }, {
      "id": "helloworld_native_xamarin_client",
      "name": "Helloworld Native Xamarin App",
      "type": "client_xamarin",
      "priority": 0.445,
      "description": "Native Windows Hello World App which echos your name via the Cloud",
      "repoUrl": "git://github.com/feedhenry-templates/helloworld-xamarin.git",
      "githubUrl": "https://github.com/feedhenry-templates/helloworld-xamarin.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-xamarin",
      "selected": false,
      "category": "Xamarin"
    }, {
      "id": "native_ios_swift_blank_app",
      "name": "Native iOS (Swift) blank app",
      "type": "client_native_ios",
      "priority": 0.445,
      "description": "Native iOS (Swift) blank app",
      "repoUrl": "git://github.com/feedhenry-templates/blank-ios-swift.git",
      "githubUrl": "https://github.com/feedhenry-templates/blank-ios-swift.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-apple",
      "category": "iOS",
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry-templates/blank-ios-app/master/screenshots/iosproject_container.png"
      }]
    }, {
      "id": "blank_advanced_hybrid_client",
      "name": "Cordova App",
      "type": "client_advanced_hybrid",
      "priority": 0.5,
      "description": "Cordova App App which echos your name via the Cloud",
      "repoUrl": "git://github.com/feedhenry-templates/blank-cordova-app.git",
      "githubUrl": "https://github.com/feedhenry-templates/blank-cordova-app.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-cordova",
      "category": "Cordova",
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/blank_advanced_hybrid_client/1.png"
      }]
    }, {
      "id": "blank_advanced_webapp",
      "name": "Blank Web App",
      "type": "webapp_advanced",
      "priority": 0.49,
      "description": "Blank Hello World Web App",
      "repoUrl": "git://github.com/feedhenry/fh-advanced-webapp-blank-app.git",
      "githubUrl": "https://github.com/feedhenry/fh-advanced-webapp-blank-app.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-nodejs",
      "selected": false,
      "category": "Blank Apps",
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/blank_advanced_webapp/1.png"
      }]
    }, {
      "id": "blank_native_windows10",
      "name": "Blank Native Universal Windows 10 App",
      "type": "client_native_windowsuniversal",
      "priority": 0.44,
      "description": "Blank Hello World Web App",
      "repoUrl": "git://github.com/feedhenry-templates/fh-csharp-window-10-blank-app.git",
      "githubUrl": "https://github.com/feedhenry-templates/fh-csharp-window-10-blank-app.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-windows8",
      "category": "Windows",
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/blank_native_windows_universal/2.png"
      }]
    }, {
      "id": "blank_xamarin",
      "name": "Blank Xamarin App",
      "type": "client_xamarin",
      "description": "Blank Xamarin App",
      "priority": 0.03,
      "repoUrl": "git://github.com/feedhenry-templates/blank-xamarin.git",
      "githubUrl": "https://github.com/feedhenry-templates/blank-xamarin.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-xamarin",
      "category": "Xamarin",
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/blank_xamarin/1.png"
      }]
    }, {
      "id": "blank_vs_universal",
      "name": "Blank Visual Studio C# Universal App",
      "type": "client_native_windowsuniversal",
      "description": "Blank Universal C# Hello world app",
      "priority": 0.03,
      "repoUrl": "git://github.com/feedhenry-templates/fh-csharp-universal-sdk-blank-app.git",
      "githubUrl": "https://github.com/feedhenry-templates/fh-csharp-universal-sdk-blank-app.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-windows8",
      "category": "Windows",
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/blank_native_windows_universal/1.png"
      }]
    }, {
      "id": "blank_appcelerator",
      "name": "Blank Appcelerator App",
      "type": "client_appcelerator",
      "description": "Hello World Appcelerator App",
      "priority": 0.04,
      "repoUrl": "git://github.com/feedhenry-training/fh-titanium-example.git",
      "githubUrl": "https://github.com/feedhenry-training/fh-titanium-example.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-appcelerator",
      "category": "Appcelerator",
      "selected": false,
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/blank_appcelerator/1.png"
      }]
    }, {
      "id": "appforms_client",
      "description": "A template App for displaying Forms",
      "name": "Cordova Forms App",
      "icon": "icon-check",
      "type": "client_advanced_hybrid",
      "priority": 0.505,
      "selected": false,
      "repoUrl": "git://github.com/feedhenry/appforms-project-client.git",
      "githubUrl": "https://github.com/feedhenry/appforms-project-client.git",
      "repoBranch": "refs/heads/master",
      "forcedSelection": true,
      "category": "Cordova",
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry/fh-template-apps/master/screenshots/apps/appforms_client/1.png"
      }]
    }, {
      "id": "hello_world_backbone_hybrid_app",
      "name": "Backbone Hello World Client",
      "description": "Hello World Backbone.js App",
      "type": "client_advanced_hybrid",
      "priority": 0.4,
      "repoUrl": "git://github.com/feedhenry-templates/quickstart-backbone-app.git",
      "githubUrl": "https://github.com/feedhenry-templates/quickstart-backbone-app.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-backbone",
      "category": "Backbone",
      "selected": false,
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry-templates/quickstart-backbone-app/master/screenshots/backboneproject_nocontainer.png"
      }]
    }, {
      "id": "hello_world_angular_hybrid_app",
      "name": "AngularJS Hello World Client",
      "description": "Hello World AngularJS App",
      "type": "client_advanced_hybrid",
      "priority": 0.4,
      "repoUrl": "git://github.com/feedhenry-templates/quickstart-angular-app.git",
      "githubUrl": "https://github.com/feedhenry-templates/quickstart-angular-app.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-angular",
      "selected": false,
      "category": "AngularJS",
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry-templates/quickstart-angular-app/master/screenshots/angularproject_nocontainer.png"
      }]
    }, {
      "id": "hello_world_ionic_hybrid_app",
      "name": "Ionic Hello World Client",
      "description": "Hello World Ionic & AngularJS App",
      "type": "client_advanced_hybrid",
      "priority": 0.4,
      "repoUrl": "git://github.com/feedhenry-templates/quickstart-ionic-app.git",
      "githubUrl": "https://github.com/feedhenry-templates/quickstart-ionic-app.git",
      "repoBranch": "refs/heads/master",
      "icon": "icon-ionic",
      "category": "Ionic",
      "selected": false,
      "screenshots": [{
        "url": "https://raw.githubusercontent.com/feedhenry-templates/quickstart-ionic-app/master/screenshots/ionicproject_nocontainer.png"
      }]
    }],
    "connectorTemplates": [{
      "name": "New mBaaS Service",
      "priority": 0.9,
      "id": "new-service",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/helloworld-cloud/master/README.md",
      "type": "other",
      "image": "public/img/cloud_plugins/fh.png",
      "category": "Custom Service",
      "description": "This is a blank FeedHenry Service for you to customise",
      "appTemplates": ["hello_world_mbaas_instance"]
    }, {
      "name": "OpenShift mBaaS Service",
      "priority": 0.899,
      "id": "openshift-mbaas-service",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-mbaas-service/master/README.md",
      "type": "other",
      "image": "public/img/cloud_plugins/fh.png",
      "category": "Platform Service",
      "description": "fh-mbaas service for use in OpenShift MBaaS Targets. Required for fh.forms API.",
      "appTemplates": [{
        "id": "openshift-mbaas-service-instance",
        "name": "OpenShift mBaaS Service",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-templates/fh-mbaas-service.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-mbaas-service.git",
        "repoBranch": "refs/heads/master",
        "image": "public/img/cloud_plugins/fh.png",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-mbaas-service/master/README.md",
        "category": "Platform Service",
        "configuration": [],
        "forcedSelection": true
      }]
    }, {
      "id": "saml-service",
      "priority": 0.892,
      "name": "SAML Service",
      "type": "other",
      "image": "https://raw.githubusercontent.com/feedhenry-templates/saml-service/master/files/icon.png",
      "category": "Authentication",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/saml-service/master/README.md",
      "description": "Sample SAML Authentication service for connecting to your IdP",
      "appTemplates": [{
        "id": "saml-service",
        "name": "SAML Service",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-templates/saml-service.git",
        "githubUrl": "https://github.com/feedhenry-templates/saml-service.git",
        "repoBranch": "refs/heads/master",
        "image": "https://raw.githubusercontent.com/feedhenry-templates/saml-service/master/files/icon.png",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/saml-service/master/README.md",
        "category": "Authentication",
        "forcedSelection": true,
        "configuration": [{
          "desc": "Issuer string to supply to identity provider (Defaults to: https://MBaaS_Service_Host/login/callback)",
          "varName": "SAML_ISSUER",
          "optional": true
        }, {
          "desc": "Full callback URL for IdP to send assertions back to (Defaults to: https://MBaaS_Service_Host/login/callback)",
          "varName": "SAML_CALLBACK_URL",
          "optional": true
        }, {
          "desc": "Identity provider entrypoint (e.g. https://my-adfs.example.com/adfs/ls/)",
          "varName": "SAML_ENTRY_POINT"
        }, {
          "desc": "Name identifier format to request auth context - defaults to 'urn:federation:authentication:windows' (for AD FS)",
          "varName": "SAML_AUTHN_CONTEXT"
        }, {
          "desc": "Validate incoming SAML responses with your IdP's public certificate",
          "varName": "SAML_CERT",
          "optional": true
        }]
      }]
    }, {
      "id": "status-monitor",
      "priority": 0.891,
      "name": "Status Monitor Service",
      "type": "other",
      "image": "https://raw.githubusercontent.com/feedhenry-templates/fh-health-monitor/master/files/icon.png",
      "category": "Monitoring",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-health-monitor/master/README.md",
      "description": "A service for monitoring the status of connectivity from Feed Henry to your remote end-points.",
      "appTemplates": [{
        "id": "fh-status-monitor",
        "name": "Status Monitor",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-templates/fh-health-monitor.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-health-monitor.git",
        "repoBranch": "refs/heads/master",
        "image": "https://raw.githubusercontent.com/feedhenry-templates/fh-health-monitor/master/files/icon.png",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-health-monitor/master/README.md",
        "category": "Monitoring",
        "forcedSelection": true,
        "configuration": []
      }]
    }, {
      "name": "LDAP Authentication Connector",
      "priority": 0.885,
      "id": "ldapauthenticate",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-ldap-cloud/master/README.md",
      "type": "other",
      "image": "public/img/cloud_plugins/fh.png",
      "category": "Authentication",
      "description": "Authenticate users via LDAP",
      "appTemplates": [{
        "id": "ldap-connector-cloud",
        "name": "LDAP Authentication Connector",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-templates/fh-connector-ldap-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-connector-ldap-cloud.git",
        "repoBranch": "refs/heads/master",
        "image": "public/img/cloud_plugins/fh.png",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-ldap-cloud/master/README.md",
        "category": "Authentication",
        "forcedSelection": true,
        "configuration": [{
          "desc": "The URL of the LDAP server (including 'ldap://')",
          "varName": "LDAP_URL"
        }, {
          "desc": "The prefix to be added before the username when building the full Distinguished Name",
          "optional": true,
          "varName": "DN_PREFIX"
        }, {
          "desc": "The suffix to be added after the username when building the full Distinguished Name",
          "optional": true,
          "varName": "DN"
        }]
      }]
    }, {
      "name": "Barcode Reader",
      "priority": 0.883,
      "id": "barcodereader",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/barcode-reader-service/master/README.md",
      "type": "other",
      "image": "https://raw.githubusercontent.com/feedhenry-templates/barcode-reader-service/master/barcode.jpg",
      "category": "SaaS Connectors",
      "description": "Looks up a barcode by UPC id",
      "appTemplates": [{
        "id": "barcode-reader-service",
        "name": "Barcode Reader",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-templates/barcode-reader-service.git",
        "githubUrl": "https://github.com/feedhenry-templates/barcode-reader-service.git",
        "repoBranch": "refs/heads/master",
        "image": "https://raw.githubusercontent.com/feedhenry-templates/barcode-reader-service/master/barcode.jpg",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/barcode-reader-service/master/README.md",
        "category": "SaaS Connectors",
        "forcedSelection": true,
        "configuration": [{
          "desc": "An access token for http://www.searchupc.com",
          "varName": "ACCESS_TOKEN"
        }]
      }]
    }, {
      "name": "API Mapper",
      "priority": 0.898,
      "id": "rest-client",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-api-mapper/master/README.md",
      "type": "other",
      "image": "public/img/cloud_plugins/fh.png",
      "category": "Platform Service",
      "description": "Explore APIs which may be protected by a firewall, or only accessible to the cloud via VPN. Supports saving requests, and generates useful code snippets. (Tech Preview)",
      "appTemplates": [{
        "id": "api-mapper-service",
        "name": "API Mapper",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-templates/fh-api-mapper.git",
        "githubUrl": "git://github.com/feedhenry-templates/fh-api-mapper.git",
        "repoBranch": "refs/heads/master",
        "image": "public/img/cloud_plugins/fh.png",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-api-mapper/master/README.md",
        "category": "Platform Service",
        "configuration": [],
        "forcedSelection": true
      }]
    }, {
      "id": "salesforce",
      "priority": 0.88,
      "name": "Salesforce Connector",
      "type": "other",
      "image": "public/img/cloud_plugins/salesforce.png",
      "category": "SaaS Connectors",
      "docs": "https://raw.github.com/feedhenry-templates/fh-connector-salesforce-cloud/master/README.md",
      "description": "A service for integrating with Salesforce",
      "appTemplates": [{
        "id": "salesforce-cloud",
        "name": "Salesforce Connector",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-templates/fh-connector-salesforce-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-connector-salesforce-cloud.git",
        "repoBranch": "refs/heads/master",
        "image": "public/img/cloud_plugins/salesforce.png",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-salesforce-cloud/master/README.md",
        "category": "SaaS",
        "forcedSelection": true,
        "configuration": [{
          "desc": "Your salesforce.com login",
          "varName": "SALESFORCE_USERNAME"
        }, {
          "desc": "Your salesforce.com password",
          "varName": "SALESFORCE_PASSWORD",
          "type": "password"
        }, {
          "desc": "Your salesforce security token (optional - not needed if you've added our cloud to your access whitelist)",
          "optional": true,
          "varName": "SALESFORCE_SECURITYTOKEN",
          "type": "password"
        }]
      }]
    }, {
      "id": "twilio",
      "priority": 0.86,
      "name": "Twilio Connector",
      "type": "other",
      "image": "public/img/cloud_plugins/twilio.png",
      "docs": "https://raw.github.com/feedhenry-templates/fh-connector-twilio-cloud/master/README.md",
      "category": "SaaS Connectors",
      "description": "A service for integrating with Twilio",
      "appTemplates": [{
        "id": "twilio-cloud",
        "name": "Twilio Connector",
        "type": "cloud_nodejs",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-twilio-cloud/master/README.md",
        "repoUrl": "git://github.com/feedhenry-templates/fh-connector-twilio-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-connector-twilio-cloud.git",
        "repoBranch": "refs/heads/master",
        "image": "public/img/cloud_plugins/twilio.png",
        "category": "SaaS",
        "forcedSelection": true,
        "configuration": [{
          "desc": "Twilio account SID",
          "varName": "TWILIO_SID"
        }, {
          "desc": "Twilio Auth Token",
          "varName": "TWILIO_AUTH"
        }, {
          "desc": "Your Twilio number you\"ve been assigned",
          "varName": "TWILIO_NUMBER"
        }]
      }]
    }, {
      "id": "ibeacon",
      "priority": 0.85,
      "name": "iBeacon Connector",
      "type": "other",
      "image": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-ibeacon-manager/master/logo.png",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-ibeacon-manager/master/README.md",
      "category": "Custom Service",
      "description": "Management API for iBeacons within the platform",
      "appTemplates": [{
        "id": "ibeacon-cloud",
        "name": "iBeacon Connector",
        "type": "cloud_nodejs",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-ibeacon-manager/master/README.md",
        "repoUrl": "git://github.com/feedhenry-templates/fh-connector-ibeacon-manager.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-connector-ibeacon-manager.git",
        "repoBranch": "refs/heads/master",
        "image": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-ibeacon-manager/master/logo.png",
        "category": "Custom Service",
        "forcedSelection": true,
        "configuration": [{
          "desc": "iBeacon group UUID",
          "varName": "IBEACON_UUID"
        }]
      }]
    }, {
      "id": "sendgrid",
      "priority": 0.84,
      "name": "SendGrid Connector",
      "type": "other",
      "image": "public/img/cloud_plugins/sendgrid.png",
      "docs": "https://raw.github.com/feedhenry-templates/fh-connector-sendgrid-cloud/master/README.md",
      "category": "SaaS Connectors",
      "description": "A service for integrating with Sendgrid",
      "appTemplates": [{
        "id": "sendgrid-cloud",
        "name": "SendGrid Connector",
        "type": "cloud_nodejs",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-sendgrid-cloud/master/README.md",
        "repoUrl": "git://github.com/feedhenry-templates/fh-connector-sendgrid-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-connector-sendgrid-cloud.git",
        "repoBranch": "refs/heads/master",
        "image": "public/img/cloud_plugins/sendgrid.png",
        "category": "SaaS",
        "forcedSelection": true,
        "configuration": [{
          "desc": "Your SendGrid username",
          "varName": "SENDGRID_USERNAME"
        }, {
          "desc": "Your SendGrid password",
          "varName": "SENDGRID_PASSWORD",
          "field": "password"
        }, {
          "desc": "From email address",
          "varName": "SENDGRID_FROM"
        }, {
          "desc": "From descriptive name",
          "varName": "SENDGRID_FROMNAME"
        }]
      }]
    }, {
      "id": "mysql",
      "priority": 0.897,
      "name": "MySQL Connector",
      "type": "other",
      "image": "public/img/cloud_plugins/mysql.png",
      "docs": "https://raw.github.com/feedhenry-templates/fh-connector-mysql-cloud/master/README.md",
      "category": "Database",
      "description": "A service for integrating with MySQL",
      "appTemplates": [{
        "id": "mysql-cloud",
        "name": "MySQL Connector",
        "type": "cloud_nodejs",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-mysql-cloud/master/README.md",
        "repoUrl": "git://github.com/feedhenry-templates/fh-connector-mysql-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-connector-mysql-cloud.git",
        "repoBranch": "refs/heads/master",
        "image": "public/img/cloud_plugins/mysql.png",
        "category": "Database",
        "forcedSelection": true,
        "configuration": [{
          "desc": "MySQL Database Host",
          "varName": "MYSQL_HOST"
        }, {
          "desc": "MySQL Username",
          "varName": "MYSQL_USERNAME"
        }, {
          "desc": "MySQL Password",
          "varName": "MYSQL_PASSWORD",
          "field": "password"
        }]
      }]
    }, {
      "id": "mongodb",
      "priority": 0.82,
      "name": "MongoDB",
      "type": "other",
      "image": "public/img/cloud_plugins/mongodb.png",
      "category": "Remote Database",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-mongodb-cloud/master/README.md",
      "description": "A service for integrating with MongoDB",
      "appTemplates": [{
        "id": "mongodb-cloud",
        "name": "MongoDB",
        "type": "cloud_nodejs",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-mongodb-cloud/master/README.md",
        "repoUrl": "git://github.com/feedhenry-templates/fh-connector-mongodb-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-connector-mongodb-cloud.git",
        "repoBranch": "refs/heads/master",
        "image": "public/img/cloud_plugins/mongodb.png",
        "category": "Remote Database",
        "forcedSelection": true,
        "configuration": [{
          "desc": "MongoDB Username",
          "varName": "MONGODB_USER"
        }, {
          "desc": "MongoDB Password",
          "varName": "MONGODB_PASSWORD",
          "field": "password"
        }, {
          "desc": "MongoDB Hostname",
          "varName": "MONGODB_HOST"
        }, {
          "desc": "MongoDB Database Name",
          "varName": "MONGODB_DATABASE"
        }]
      }]
    }, {
      "id": "amazon-ses",
      "priority": 0.8,
      "name": "SES",
      "type": "other",
      "image": "public/img/cloud_plugins/aws_ses.png",
      "category": "Amazon Web Services",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-amazon-ses-cloud/master/README.md",
      "description": "A service for integrating with Amazon SES",
      "appTemplates": [{
        "id": "amazon-ses-cloud",
        "name": "SES",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-amazon-ses-cloud/master/README.md",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-templates/fh-connector-amazon-ses-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-connector-amazon-ses-cloud.git",
        "repoBranch": "refs/heads/master",
        "image": "public/img/cloud_plugins/aws_ses.png",
        "category": "Amazon Web Services",
        "forcedSelection": true,
        "configuration": [{
          "varName": "AWS_ACCESS_KEY_ID",
          "desc": "Amazon Web Services Access Key Identifier"
        }, {
          "varName": "AWS_SECRET_ACCESS_KEY",
          "desc": "Amazon Web Services Secret Access Key"
        }]
      }]
    }, {
      "id": "amazon-sqs",
      "priority": 0.79,
      "name": "SQS",
      "type": "other",
      "image": "public/img/cloud_plugins/aws_sqs.png",
      "category": "Amazon Web Services",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-amazon-sqs-cloud/master/README.md",
      "description": "A service for integrating with Amazon SQS",
      "appTemplates": [{
        "id": "amazon-sqs-cloud",
        "name": "SQS",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-templates/fh-connector-amazon-sqs-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-connector-amazon-sqs-cloud.git",
        "repoBranch": "refs/heads/master",
        "image": "public/img/cloud_plugins/aws_sqs.png",
        "category": "Amazon Web Services",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-amazon-sqs-cloud/master/README.md",
        "forcedSelection": true,
        "configuration": [{
          "varName": "AWS_ACCESS_KEY_ID",
          "desc": "Amazon Web Services Access Key Identifier"
        }, {
          "varName": "AWS_SECRET_ACCESS_KEY",
          "desc": "Amazon Web Services Secret Access Key"
        }]
      }]
    }, {
      "id": "google",
      "priority": 0.78,
      "name": "Google",
      "type": "other",
      "image": "public/img/cloud_plugins/google.png",
      "category": "SaaS Connectors",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-google-cloud/master/README.md",
      "description": "A service for integrating with Google",
      "appTemplates": [{
        "id": "google-cloud",
        "name": "Google",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-google-cloud/master/README.md",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-templates/fh-connector-google-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-connector-google-cloud.git",
        "repoBranch": "refs/heads/master",
        "image": "public/img/cloud_plugins/google.png",
        "category": "SaaS Connectors",
        "configuration": [],
        "forcedSelection": true
      }]
    }, {
      "id": "sap-netweaver",
      "priority": 0.76,
      "name": "SAP Netweaver",
      "type": "other",
      "image": "public/img/cloud_plugins/netweaver.png",
      "category": "SaaS Connectors",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-sap-netweaver-cloud/master/README.md",
      "description": "A service for integrating with SAP Netweaver",
      "appTemplates": [{
        "id": "sap_netweaver_cloud",
        "name": "SAP Netweaver",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-templates/fh-connector-sap-netweaver-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-connector-sap-netweaver-cloud.git",
        "repoBranch": "refs/heads/master",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-sap-netweaver-cloud/master/README.md",
        "image": "public/img/cloud_plugins/netweaver.png",
        "category": "SaaS Connectors",
        "forcedSelection": true,
        "configuration": [{
          "desc": "Your SAP Hostname",
          "varName": "SAP_HOST"
        }, {
          "desc": "Your SAP SysID",
          "varName": "SAP_SYSID"
        }, {
          "desc": "Your SAP SysNR",
          "varName": "SAP_SYSNR"
        }, {
          "desc": "Your SAP Username",
          "varName": "SAP_USER"
        }, {
          "desc": "Your SAP Password",
          "varName": "SAP_PASSWORD",
          "field": "password"
        }, {
          "desc": "Your SAP Client",
          "varName": "SAP_CLIENT"
        }]
      }]
    }, {
      "id": "paypal",
      "priority": 0.75,
      "name": "Paypal",
      "type": "other",
      "image": "public/img/cloud_plugins/paypal.png",
      "category": "eCommerce",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-paypal-cloud/master/README.md",
      "description": "A service for integrating with Paypal",
      "appTemplates": [{
        "id": "paypal_cloud",
        "name": "Paypal",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-templates/fh-connector-paypal-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-connector-paypal-cloud.git",
        "repoBranch": "refs/heads/master",
        "image": "public/img/cloud_plugins/paypal.png",
        "category": "eCommerce",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-paypal-cloud/master/README.md",
        "forcedSelection": true,
        "configuration": [{
          "desc": "PayPal hostname to connect to (optional - assumes api.paypal.com)",
          "optional": true,
          "varName": "PAYPAL_HOST"
        }, {
          "desc": "Your PayPal client ID",
          "varName": "PAYPAL_CLIENT_ID"
        }, {
          "desc": "Client Secret",
          "varName": "PAYPAL_CLIENT_SECRET"
        }]
      }]
    }, {
      "id": "sharepoint",
      "priority": 0.74,
      "name": "Sharepoint",
      "type": "other",
      "image": "public/img/cloud_plugins/sharepoint.png",
      "category": "SaaS Connectors",
      "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-sharepoint-cloud/master/README.md",
      "description": "A service for integrating with Sharepoint",
      "appTemplates": [{
        "id": "sharepoint_cloud",
        "name": "Sharepoint",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/fh-connector-sharepoint-cloud/master/README.md",
        "type": "cloud_nodejs",
        "repoUrl": "git://github.com/feedhenry-templates/fh-connector-sharepoint-cloud.git",
        "githubUrl": "https://github.com/feedhenry-templates/fh-connector-sharepoint-cloud.git",
        "repoBranch": "refs/heads/master",
        "image": "public/img/cloud_plugins/sharepoint.png",
        "category": "SaaS Connectors",
        "forcedSelection": true,
        "configuration": [{
          "desc": "Your Sharepoint Hostname",
          "varName": "SHAREPOINT_HOSTNAME"
        }, {
          "desc": "Your Sharepoint username - omit if you don't plan on using a service account for this service",
          "optional": true,
          "varName": "SHAREPOINT_USERNAME"
        }, {
          "desc": "Your Sharepoint password - omit if you don't plan on using a service account for this service",
          "optional": true,
          "varName": "SHAREPOINT_PASSWORD",
          "type": "password"
        }, {
          "desc": "Authentication type in use - optional, defaults to `basic`",
          "optional": true,
          "varName": "SHAREPOINT_AUTH_TYPE"
        }, {
          "desc": "Disable strict SSL - optional, defaults to `true`. Set to `false` to allow connecting to self-signed instances of Sharepoint.",
          "optional": true,
          "varName": "SHAREPOINT_STRICT_SSL"
        }, {
          "desc": "Session Timeout - optional - defaults to 3,600 seconds (1hr). Sets the default duration a session is held for in the mobile cloud.",
          "optional": true,
          "varName": "SHAREPOINT_SESSION_TIMEOUT"
        }]
      }]
    },
      {
        "id": "datasource_static",
        "priority": 0.73,
        "name": "Static Data Source",
        "type": "other",
        "image": "public/img/cloud_plugins/fh.png",
        "category": "Data Sources",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/appforms-datasources-static/master/README.md",
        "description": "A service for using a static file for serving Data Source data.",
        "appTemplates": [
          {
            "id": "static_datasource_cloud",
            "name": "Static Data Sources",
            "docs": "https://raw.githubusercontent.com/feedhenry-templates/appforms-datasources-static/master/README.md",
            "type": "cloud_nodejs",
            "repoUrl": "git://github.com/feedhenry-templates/appforms-datasources-static.git",
            "githubUrl": "https://github.com/feedhenry-templates/appforms-datasources-static.git",
            "repoBranch": "refs/heads/master",
            "image": "public/img/cloud_plugins/fh.png",
            "category": "Data Sources",
            "forcedSelection": true
          }
        ]
      },
      {
        "id": "datasource_mongodb",
        "priority": 0.72,
        "name": "MongoDB Data Source",
        "type": "other",
        "image": "public/img/cloud_plugins/fh.png",
        "category": "Data Sources",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/appforms-datasources-mongodb/master/README.md",
        "description": "A service for integrating with Data Sources backed by MongoDB and Data Browser",
        "appTemplates": [
          {
            "id": "mongodb_datasource_cloud",
            "name": "MongoDB Data Sources",
            "docs": "https://raw.githubusercontent.com/feedhenry-templates/appforms-datasources-mongodb/master/README.md",
            "type": "cloud_nodejs",
            "repoUrl": "git://github.com/feedhenry-templates/appforms-datasources-mongodb.git",
            "githubUrl": "https://github.com/feedhenry-templates/appforms-datasources-mongodb.git",
            "repoBranch": "refs/heads/master",
            "image": "public/img/cloud_plugins/fh.png",
            "category": "Data Sources",
            "forcedSelection": true
          }
        ]
      },
      {
        "id": "datasource_internet",
        "priority": 0.71,
        "name": "Internet Data Source",
        "type": "other",
        "image": "public/img/cloud_plugins/fh.png",
        "category": "Data Sources",
        "docs": "https://raw.githubusercontent.com/feedhenry-templates/appforms-datasources-internet/master/README.md",
        "description": "A service for integrating with Data Sources backed by data from the internet.",
        "appTemplates": [
          {
            "id": "internet_datasource_cloud",
            "name": "Internet Data Sources",
            "docs": "https://raw.githubusercontent.com/feedhenry-templates/appforms-datasources-internet/master/README.md",
            "type": "cloud_nodejs",
            "repoUrl": "git://github.com/feedhenry-templates/appforms-datasources-internet.git",
            "githubUrl": "https://github.com/feedhenry-templates/appforms-datasources-internet.git",
            "repoBranch": "refs/heads/master",
            "image": "public/img/cloud_plugins/fh.png",
            "category": "Data Sources",
            "forcedSelection": true
          }
        ]
      },{
        "id": "wfm_auth_service",
        "priority": 0.896,
        "name": "WFM Auth Service",
        "type": "other",
        "image": "public/img/cloud_plugins/fh.png",
        "category": "Authentication",
        "description": "A service providing authentication for WFM. (Tech Preview)",
        "appTemplates": [{
          "id": "wfm_auth_service_app",
          "name": "WFM Demo Custom Auth mBaaS Service",
          "type": "cloud_nodejs",
          "repoUrl": "git://github.com/feedhenry-raincatcher/raincatcher-demo-auth.git",
          "githubUrl": "https://github.com/feedhenry-raincatcher/raincatcher-demo-auth.git",
          "repoBranch": "refs/heads/v2.1.0-alpha",
          "category": "Custom Service",
          "forcedSelection": true
        }]
      }]
  },
  "hide": {
    "projectTemplates": [],
    "appTemplates": [],
    "connectorTemplates": []
  }
}


//var result = jsonQuery('show[**][*description]', { data: data }).value

var helpers = {
  select: function (input) {
    if (Array.isArray(input)) {
      var keys = [].slice.call(arguments, 1)
      return input.map(function (item) {
        return Object.keys(item).reduce(function (result, key) {
          if (~keys.indexOf(key)) {
            result[key] = item[key]
          }
          return result
        }, {})
      })
    }
  }
}

var result = jsonQuery('show[**]:select(id,name, description)', {
  data: data, locals: helpers
}).value

console.log(result)
