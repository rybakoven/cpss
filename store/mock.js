'use strict'

module.exports = function () {
  return {
    cpssId: '41',
    projectName: 'cpss41-a4newpss-mill',
    containers:
      [
        {
          Id: '29545b5d654cd5215ee56d22e2d08b4d55f674c0b55d84092cdf610c2b9a522e',
          Names: [
            '/cpss41-a4newpss-mill_rpcdcs_1'
          ],
          Image: 'registry.tais.aero/tais/php-rpc/rpc:master',
          ImageID: 'sha256:b113c090d0c66a3b21b11ddd8013702931d4310e97a3f03bc563fdd18220d66d',
          Command: '/cmd.sh',
          Created: 1625485190,
          Ports: [
            {
              IP: '0.0.0.0',
              PrivatePort: 80,
              PublicPort: 4114,
              Type: 'tcp'
            }
          ],
          Labels: {
            'com.docker.compose.config-hash': '8214746e9e3e14aef73f3418b958f635a0abf21645e95c05297ac081b667ded7',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'rpcdcs',
            'com.docker.compose.version': '1.29.1'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: '5ff5a034649b5ddd543b1a9edd51fb14033ed77843a320918e39306d004d4be5',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.17',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:11',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/out',
              Destination: '/var/log/twx',
              Mode: '',
              RW: true,
              Propagation: 'rprivate'
            },
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/.cpss.stage/rpc/dcs/config.php',
              Destination: '/app/php-rpc/config.php',
              Mode: '',
              RW: true,
              Propagation: 'rprivate'
            }
          ]
        },
        {
          Id: '5aae0c5e607d9bb54ffec9df563ebcd060f7364fd126f759341e6df4ceab2ada',
          Names: [
            '/cpss41-a4newpss-mill_mkv_1'
          ],
          Image: 'registry.tais.aero/tais/node-twt-mkv/node-twt-mkv:master',
          ImageID: 'sha256:37eff28baa420e3afbe8fa7f25fec4af94966e986702caa55f9c8688d907875b',
          Command: 'docker-entrypoint.sh /bin/sh -c \'node --max-old-space-size=$MAXOLDSPACESIZE server.js\'',
          Created: 1625485190,
          Ports: [
            {
              IP: '0.0.0.0',
              PrivatePort: 4002,
              PublicPort: 4105,
              Type: 'tcp'
            }
          ],
          Labels: {
            'com.docker.compose.config-hash': '7f9e8cd83585f490a57d335847a79ddde4870fbdc2a1b455f43525060ce806cf',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'mkv',
            'com.docker.compose.version': '1.29.1'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: '032630c0bed6b7e88228b7f8efe32e50dc6648826c82e0bb64843498cf1b82a3',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.14',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:0e',
                DriverOpts: null
              }
            }
          },
          Mounts: []
        },
        {
          Id: 'ed4d9cda2e736aa17ed94a84fe85a86d9a7aa5f8bc747dd2d0ae6a7134efe4d5',
          Names: [
            '/cpss41-a4newpss-mill_redis_1'
          ],
          Image: 'sha256:e3ab4a5c2293a342e0ac3121ea43d1d0786a343d88daf15abc1eced747e3578f',
          ImageID: 'sha256:e3ab4a5c2293a342e0ac3121ea43d1d0786a343d88daf15abc1eced747e3578f',
          Command: 'docker-entrypoint.sh redis-server /usr/local/etc/redis/redis.conf',
          Created: 1625485190,
          Ports: [
            {
              IP: '0.0.0.0',
              PrivatePort: 6379,
              PublicPort: 4120,
              Type: 'tcp'
            }
          ],
          Labels: {
            'com.docker.compose.config-hash': '4e42898d1c23c134b32946b36abe0a4f9bd321ba2c212579e37ba0a1335c58f6',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'redis',
            'com.docker.compose.version': '1.29.1'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: '526d098062f2cdf060aec91fc186f4b83da1b9be9ec53bcb8d3ad71c9dcf21c5',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.15',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:0f',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'tmpfs',
              Source: '',
              Destination: '/data',
              Mode: '',
              RW: true,
              Propagation: ''
            }
          ]
        },
        {
          Id: '6df1c2f8ffc470bedef184a66776842e9fdc3b09ecbf1661392dcea0d4ef0f10',
          Names: [
            '/cpss41-a4newpss-mill_nginx_1'
          ],
          Image: 'sha256:87b37a5e4f7fb4e9a10bd7790b40dc7c0de27b5578e87627ed3e883bffc66382',
          ImageID: 'sha256:87b37a5e4f7fb4e9a10bd7790b40dc7c0de27b5578e87627ed3e883bffc66382',
          Command: '/docker-entrypoint.sh nginx -g \'daemon off;\'',
          Created: 1625485190,
          Ports: [
            {
              IP: '0.0.0.0',
              PrivatePort: 8081,
              PublicPort: 4115,
              Type: 'tcp'
            },
            {
              IP: '0.0.0.0',
              PrivatePort: 8082,
              PublicPort: 4118,
              Type: 'tcp'
            },
            {
              PrivatePort: 80,
              Type: 'tcp'
            },
            {
              IP: '0.0.0.0',
              PrivatePort: 8080,
              PublicPort: 4103,
              Type: 'tcp'
            }
          ],
          Labels: {
            'com.docker.compose.config-hash': '4dfc6ba18a362a4cc035ac3ea26e2315d8fb73cb1100503c209f1144814a9a19',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'nginx',
            'com.docker.compose.version': '1.29.1',
            maintainer: 'NGINX Docker Maintainers <docker-maint@nginx.com>'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: 'e4e1074da231ddf68c105959eca00ce138957a84f80ef59f10768a1d36e0f3bd',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.20',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:14',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/out',
              Destination: '/local/out',
              Mode: '',
              RW: true,
              Propagation: 'rprivate'
            },
            {
              Type: 'tmpfs',
              Source: '',
              Destination: '/local/tmp',
              Mode: '',
              RW: true,
              Propagation: ''
            }
          ]
        },
        {
          Id: '521998ea323af022a03f2cd6603e2fe94a1641c7184d8ebf0d89bf927fd9257e',
          Names: [
            '/cpss41-a4newpss-mill_np_1'
          ],
          Image: 'sha256:5fde4a0f967c8a5bb497eaa8de0f0bc2e0ef9adbfe995a4c262c8f8fd18575e2',
          ImageID: 'sha256:5fde4a0f967c8a5bb497eaa8de0f0bc2e0ef9adbfe995a4c262c8f8fd18575e2',
          Command: '/bin/sh -c /entrypoint0.sh',
          Created: 1625485190,
          Ports: [],
          Labels: {
            'com.docker.compose.config-hash': '5be1c8b30f3f76f5b0454d2c4fcbbe073a98b9391ebc54796ade58af24c51ec6',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'np',
            'com.docker.compose.version': '1.29.1'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: '67ffd08d2737839f287a29212a0c39343e82be3f680793c27eb228274778e4f8',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.9',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:09',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'volume',
              Name: 'cpss41-a4newpss-mill_cpss',
              Source: '/data/docker/volumes/cpss41-a4newpss-mill_cpss/_data',
              Destination: '/cpss',
              Driver: 'local',
              Mode: 'z',
              RW: true,
              Propagation: ''
            },
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/out',
              Destination: '/local/out',
              Mode: '',
              RW: true,
              Propagation: 'rprivate'
            }
          ]
        },
        {
          Id: '76551fb20c606e5b3d9c38ad9c99b564bfdfcc1830c243665b2dee2d2eed8774',
          Names: [
            '/cpss41-a4newpss-mill_twp_1'
          ],
          Image: 'registry.tais.aero/tais/ticketchanger/twp:master',
          ImageID: 'sha256:d0e8280318d96aa2dd92472064c0f76cd12a5b2e68476bf7f17d978f41a8d59a',
          Command: '/docker-entrypoint.sh bash -c \' cp -Rf /srv/config/* /srv/www/ && /etc/nginx/cmd.sh \'',
          Created: 1625485190,
          Ports: [
            {
              PrivatePort: 80,
              Type: 'tcp'
            },
            {
              IP: '0.0.0.0',
              PrivatePort: 8080,
              PublicPort: 4106,
              Type: 'tcp'
            }
          ],
          Labels: {
            'com.docker.compose.config-hash': 'c3885ef6616243aa280985e401927d408190cff4846777519ff3d6395b85802f',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'twp',
            'com.docker.compose.version': '1.29.1',
            maintainer: 'NGINX Docker Maintainers <docker-maint@nginx.com>'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: 'ed41a31b7774ac93a323147e6f31a8a4ba2ff93a3c7fecc094b34617296d6dbd',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.19',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:13',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/.cpss.stage/twx/twp',
              Destination: '/srv/config',
              Mode: '',
              RW: false,
              Propagation: 'rprivate'
            }
          ]
        },
        {
          Id: '246cdd0015b2f3193f84e01844719cb7316a9a98a9cb827c9b8b3eb58c30b6f5',
          Names: [
            '/cpss41-a4newpss-mill_dcs_1'
          ],
          Image: 'sha256:ce76fb241f3295499d3b4a249db986ac5eced52cc41d53ae00dff29843a6d466',
          ImageID: 'sha256:ce76fb241f3295499d3b4a249db986ac5eced52cc41d53ae00dff29843a6d466',
          Command: '/bin/sh -c /entrypoint0.sh',
          Created: 1625485190,
          Ports: [
            {
              IP: '0.0.0.0',
              PrivatePort: 9702,
              PublicPort: 4117,
              Type: 'tcp'
            },
            {
              IP: '0.0.0.0',
              PrivatePort: 9703,
              PublicPort: 4111,
              Type: 'tcp'
            }
          ],
          Labels: {
            'com.docker.compose.config-hash': '8fbe8567a1d77c93f236e819a0ac212921bef62302fd7bb0a7159dede35efae4',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'dcs',
            'com.docker.compose.version': '1.29.1'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: '343148d29c747c12ec8d32d4bb8b8b5f3cc19f753afc8d79c61866fe6ba1d27b',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.7',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:07',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'volume',
              Name: 'cpss41-a4newpss-mill_cpss',
              Source: '/data/docker/volumes/cpss41-a4newpss-mill_cpss/_data',
              Destination: '/cpss',
              Driver: 'local',
              Mode: 'z',
              RW: true,
              Propagation: ''
            },
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/.cpss.stage/f2p/dcs',
              Destination: '/f2p',
              Mode: '',
              RW: false,
              Propagation: 'rprivate'
            },
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/out',
              Destination: '/local/out',
              Mode: '',
              RW: true,
              Propagation: 'rprivate'
            }
          ]
        },
        {
          Id: 'bc7b68ac8113148d44e255515f7868afd6445a44f9e4db98faa37593532edcef',
          Names: [
            '/cpss41-a4newpss-mill_crssignk_1'
          ],
          Image: 'sha256:a61fa9a741621ee54eb433d6e6031e05e6a23dced8a669b09a8ec482a2c86ed8',
          ImageID: 'sha256:a61fa9a741621ee54eb433d6e6031e05e6a23dced8a669b09a8ec482a2c86ed8',
          Command: '/bin/sh -c /entrypoint0.sh',
          Created: 1625485190,
          Ports: [],
          Labels: {
            'com.docker.compose.config-hash': 'b2abeb18cea01455e92a7b31c306d7c1613852a317ff0668a369d30ad922aafc',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'crssignk',
            'com.docker.compose.version': '1.29.1'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: '931d561fc9b9bd8e410fcc483bcb71addfd6794f827e46932ab7dc7c42c245b8',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.18',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:12',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'volume',
              Name: 'cpss41-a4newpss-mill_cpss',
              Source: '/data/docker/volumes/cpss41-a4newpss-mill_cpss/_data',
              Destination: '/cpss',
              Driver: 'local',
              Mode: 'z',
              RW: true,
              Propagation: ''
            },
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/out',
              Destination: '/local/out',
              Mode: '',
              RW: true,
              Propagation: 'rprivate'
            },
            {
              Type: 'tmpfs',
              Source: '',
              Destination: '/local/tmp',
              Mode: '',
              RW: true,
              Propagation: ''
            }
          ]
        },
        {
          Id: 'f4ecd13ab27c5c8a3bb39be506ad077130cc1ed18253913ba23932caa083fa7c',
          Names: [
            '/cpss41-a4newpss-mill_twt_1'
          ],
          Image: 'registry.tais.aero/tais/ticketchanger/twt:master',
          ImageID: 'sha256:facb8cadf80ba2e8943db8dd13a529f8d65d6ffb789a27727c4448a5f897f812',
          Command: '/docker-entrypoint.sh bash -c \' cp -Rf /srv/config/* /srv/www/ && /etc/nginx/cmd.sh \'',
          Created: 1625485190,
          Ports: [
            {
              IP: '0.0.0.0',
              PrivatePort: 8080,
              PublicPort: 4107,
              Type: 'tcp'
            },
            {
              PrivatePort: 80,
              Type: 'tcp'
            }
          ],
          Labels: {
            'com.docker.compose.config-hash': '265c4238f8f3bb3baa297faa7fa5e5dfbd31e85a698df382db0a60a35b7c566c',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'twt',
            'com.docker.compose.version': '1.29.1',
            maintainer: 'NGINX Docker Maintainers <docker-maint@nginx.com>'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: '502fa85c28a7285b678ae506cb7abf143642bbbb04c73d47bfd2c94661b954ec',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.8',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:08',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/.cpss.stage/twx/twt',
              Destination: '/srv/config',
              Mode: '',
              RW: false,
              Propagation: 'rprivate'
            }
          ]
        },
        {
          Id: '9cc5e0dc09953821834cbfb0dc7696bc8f73fb72b61aa2a082f082e921b1bdcd',
          Names: [
            '/cpss41-a4newpss-mill_sts_1'
          ],
          Image: 'sha256:cd766aee8e0d7ac367ab8314e4294b89f7e7462c9684a86e5b415011565f9d53',
          ImageID: 'sha256:cd766aee8e0d7ac367ab8314e4294b89f7e7462c9684a86e5b415011565f9d53',
          Command: '/bin/sh -c /entrypoint0.sh',
          Created: 1625485190,
          Ports: [
            {
              IP: '0.0.0.0',
              PrivatePort: 16444,
              PublicPort: 4119,
              Type: 'tcp'
            }
          ],
          Labels: {
            'com.docker.compose.config-hash': '163dece13f8039a0769613561b78e39dbe927359e06a61aa4a1661611149ef65',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'sts',
            'com.docker.compose.version': '1.29.1'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: 'cd8e91090b1c90cd07dbca5a31d994308ea88c027237713c1c1ddccb76ad89ac',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.13',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:0d',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'volume',
              Name: 'cpss41-a4newpss-mill_cpss',
              Source: '/data/docker/volumes/cpss41-a4newpss-mill_cpss/_data',
              Destination: '/cpss',
              Driver: 'local',
              Mode: 'z',
              RW: true,
              Propagation: ''
            },
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/out',
              Destination: '/local/out',
              Mode: '',
              RW: true,
              Propagation: 'rprivate'
            },
            {
              Type: 'bind',
              Source: '/data/splunk_logs',
              Destination: '/local/splunk_logs',
              Mode: '',
              RW: true,
              Propagation: 'rprivate'
            }
          ]
        },
        {
          Id: 'ca7da1291722fe624dee257d2bc4a5416d72d42b5d36f3591ff8ade402bc71f7',
          Names: [
            '/cpss41-a4newpss-mill_twb_1'
          ],
          Image: 'registry.tais.aero/tais/ticketchanger/twb:master',
          ImageID: 'sha256:fa74fd629eb267b91f7b5d00102e16f6dfbeea65f04eaa49ce2df995c25a67bc',
          Command: '/docker-entrypoint.sh bash -c \' cp -Rf /srv/config/* /srv/www/ && /etc/nginx/cmd.sh \'',
          Created: 1625485190,
          Ports: [
            {
              PrivatePort: 80,
              Type: 'tcp'
            },
            {
              IP: '0.0.0.0',
              PrivatePort: 8080,
              PublicPort: 4112,
              Type: 'tcp'
            }
          ],
          Labels: {
            'com.docker.compose.config-hash': '36dae5e556aebbddcae8549d7495f7539dfc88af1d8df1cff858e32aeec499e3',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'twb',
            'com.docker.compose.version': '1.29.1',
            maintainer: 'NGINX Docker Maintainers <docker-maint@nginx.com>'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: 'a209c927c9b5e13e91d9107cd57663a2d287459f9456b988b6a78539f472c153',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.6',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:06',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/.cpss.stage/twx/twb',
              Destination: '/srv/config',
              Mode: '',
              RW: false,
              Propagation: 'rprivate'
            }
          ]
        },
        {
          Id: '6e7908ca2ea56127fd7310773d8b500a630194a8c4cce354fbb20bbff4455965',
          Names: [
            '/cpss41-a4newpss-mill_crssigc_1'
          ],
          Image: 'sha256:a42d727d9d82cc89e6c5d573cf9bb4c4e929ee355304202bb593eacabe9ba6b2',
          ImageID: 'sha256:a42d727d9d82cc89e6c5d573cf9bb4c4e929ee355304202bb593eacabe9ba6b2',
          Command: '/bin/sh -c /entrypoint0.sh',
          Created: 1625485190,
          Ports: [],
          Labels: {
            'com.docker.compose.config-hash': 'ab1cdab053d4fdab4f5c370b1f8294c89d6c1a6a0768c7649b9244324659edd8',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'crssigc',
            'com.docker.compose.version': '1.29.1'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: 'ea0a3b9e1d4fd36eceaef5d5ff5ba30feb9fc2e9b695f561b84dcf15022f0518',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.10',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:0a',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'volume',
              Name: 'cpss41-a4newpss-mill_cpss',
              Source: '/data/docker/volumes/cpss41-a4newpss-mill_cpss/_data',
              Destination: '/cpss',
              Driver: 'local',
              Mode: 'z',
              RW: true,
              Propagation: ''
            },
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/.cpss.stage/f2p/sig',
              Destination: '/f2p',
              Mode: '',
              RW: false,
              Propagation: 'rprivate'
            },
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/out',
              Destination: '/local/out',
              Mode: '',
              RW: true,
              Propagation: 'rprivate'
            },
            {
              Type: 'tmpfs',
              Source: '',
              Destination: '/local/tmp',
              Mode: '',
              RW: true,
              Propagation: ''
            }
          ]
        },
        {
          Id: '4c44d9aea94d7a5d5165eae31c7ef22a406534a54de5009ef2227c30f3d83f13',
          Names: [
            '/cpss41-a4newpss-mill_ase_1'
          ],
          Image: 'sha256:069db843382f996f7807f6ea1a01977e83694ef210f73fcfad202f62a84453af',
          ImageID: 'sha256:069db843382f996f7807f6ea1a01977e83694ef210f73fcfad202f62a84453af',
          Command: '/bin/sh -c /home/sybase/entrypoint0.sh',
          Created: 1625485190,
          Ports: [
            {
              IP: '0.0.0.0',
              PrivatePort: 5000,
              PublicPort: 4101,
              Type: 'tcp'
            },
            {
              PrivatePort: 5001,
              Type: 'tcp'
            }
          ],
          Labels: {
            'com.docker.compose.config-hash': 'b72e001e43dbc5ade75d930a9b84690ad95b3d1b2358e1d5b564625595b4e114',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'ase',
            'com.docker.compose.version': '1.29.1'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: '2da62fb781124f6471df2cfc20ffc46f88e454f97ce6d009b90bdbdb01c5f2f2',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.4',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:04',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'volume',
              Name: 'cpss41-a4newpss-mill_cpss',
              Source: '/data/docker/volumes/cpss41-a4newpss-mill_cpss/_data',
              Destination: '/cpss',
              Driver: 'local',
              Mode: 'z',
              RW: true,
              Propagation: ''
            },
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/out',
              Destination: '/local/out',
              Mode: '',
              RW: true,
              Propagation: 'rprivate'
            },
            {
              Type: 'tmpfs',
              Source: '',
              Destination: '/local/tmp',
              Mode: '',
              RW: true,
              Propagation: ''
            }
          ]
        },
        {
          Id: '3345f477b59dfdae5dfdb9e4bce6f2c0e86e4da9e839ebeadd6f45c0fbdbce07',
          Names: [
            '/cpss41-a4newpss-mill_crs_1'
          ],
          Image: 'sha256:ce76fb241f3295499d3b4a249db986ac5eced52cc41d53ae00dff29843a6d466',
          ImageID: 'sha256:ce76fb241f3295499d3b4a249db986ac5eced52cc41d53ae00dff29843a6d466',
          Command: '/bin/sh -c /entrypoint0.sh',
          Created: 1625485190,
          Ports: [
            {
              IP: '0.0.0.0',
              PrivatePort: 9702,
              PublicPort: 4116,
              Type: 'tcp'
            },
            {
              IP: '0.0.0.0',
              PrivatePort: 9703,
              PublicPort: 4102,
              Type: 'tcp'
            }
          ],
          Labels: {
            'com.docker.compose.config-hash': 'c3abdb58fb0897d5e47fbe4158118c16e3ad72cbc0e36322a66a46b021bae20d',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'crs',
            'com.docker.compose.version': '1.29.1'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: 'dc2babdeae60a86c2482a802ccdf20e34887465d363a90b61ef57de34f74f080',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.12',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:0c',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'volume',
              Name: 'cpss41-a4newpss-mill_cpss',
              Source: '/data/docker/volumes/cpss41-a4newpss-mill_cpss/_data',
              Destination: '/cpss',
              Driver: 'local',
              Mode: 'z',
              RW: true,
              Propagation: ''
            },
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/.cpss.stage/f2p/crs',
              Destination: '/f2p',
              Mode: '',
              RW: false,
              Propagation: 'rprivate'
            },
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/out',
              Destination: '/local/out',
              Mode: '',
              RW: true,
              Propagation: 'rprivate'
            }
          ]
        },
        {
          Id: '6f2bed82377db62e111c068acd39a79a96021f397f57233c92bf6880130510d9',
          Names: [
            '/cpss41-a4newpss-mill_selenium_1'
          ],
          Image: 'selenium/standalone-chrome:4.0.0-beta-3-prerelease-20210402',
          ImageID: 'sha256:3f3a85a33de068b774e4ae810b3d1e35b67c8ae78d76610c170b80b06768bd8a',
          Command: '/opt/bin/entry_point.sh',
          Created: 1625485190,
          Ports: [
            {
              IP: '0.0.0.0',
              PrivatePort: 4444,
              PublicPort: 4109,
              Type: 'tcp'
            },
            {
              PrivatePort: 5900,
              Type: 'tcp'
            },
            {
              IP: '0.0.0.0',
              PrivatePort: 7900,
              PublicPort: 4110,
              Type: 'tcp'
            }
          ],
          Labels: {
            authors: 'SeleniumHQ',
            'com.docker.compose.config-hash': '391315b61b9cb41beb26e0a7a407c724c830eca3b02fba7c7958ab03d99974fd',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'selenium',
            'com.docker.compose.version': '1.29.1'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: '56fc23dfaa834c6ba2686fa413b6aefb0965287e291453f6b0e4f39fa685cc24',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.16',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:10',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'bind',
              Source: '/dev/shm',
              Destination: '/dev/shm',
              Mode: 'rw',
              RW: true,
              Propagation: 'rprivate'
            }
          ]
        },
        {
          Id: '23715b6c47ef1f1b0d8d8d20b3d2c174fb150645349cd4e770a69619cc0e2bff',
          Names: [
            '/cpss41-a4newpss-mill_twtt_1'
          ],
          Image: 'registry.tais.aero/tais/ticketchanger/twtt:master',
          ImageID: 'sha256:c72eb5eed3c3efa974fcac1fecf497eebd4bb315d9d74fd2e377ec3b3092bc54',
          Command: '/docker-entrypoint.sh bash -c \' cp -Rf /srv/config/* /srv/www/ && /etc/nginx/cmd.sh \'',
          Created: 1625485190,
          Ports: [
            {
              PrivatePort: 80,
              Type: 'tcp'
            },
            {
              IP: '0.0.0.0',
              PrivatePort: 8080,
              PublicPort: 4108,
              Type: 'tcp'
            }
          ],
          Labels: {
            'com.docker.compose.config-hash': '574dcb09aeceeb8ea4f67e5b3cb058e2d0623bbc586c94c3b44064690f3cd0f7',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'twtt',
            'com.docker.compose.version': '1.29.1',
            maintainer: 'NGINX Docker Maintainers <docker-maint@nginx.com>'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: '31c5a45753da0e768713dd41cb7b55d7adced85e28800c9fe92aa0f1cc78f9aa',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.11',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:0b',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/.cpss.stage/twx/twtt',
              Destination: '/srv/config',
              Mode: '',
              RW: false,
              Propagation: 'rprivate'
            }
          ]
        },
        {
          Id: '6baabc614e53d62a61a0cd5ee2225a4e603920d3468f15764da064094c2659de',
          Names: [
            '/cpss41-a4newpss-mill_twd_1'
          ],
          Image: 'registry.tais.aero/tais/ticketchanger/twd:master',
          ImageID: 'sha256:6dc4d0d0ec3ede58c076c3a7c7d757ffbf4ad72573d3eb66a8136890a4cb7ecd',
          Command: '/docker-entrypoint.sh bash -c \' cp -Rf /srv/config/* /srv/www/ && /etc/nginx/cmd.sh \'',
          Created: 1625485190,
          Ports: [
            {
              PrivatePort: 80,
              Type: 'tcp'
            },
            {
              IP: '0.0.0.0',
              PrivatePort: 8080,
              PublicPort: 4113,
              Type: 'tcp'
            }
          ],
          Labels: {
            'com.docker.compose.config-hash': '1e21d54a2d264c65875192cc579aa3150b47f805a6b5393791603fb70e1c7f11',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'twd',
            'com.docker.compose.version': '1.29.1',
            maintainer: 'NGINX Docker Maintainers <docker-maint@nginx.com>'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: '926bf86546acf719366f02e0f9fa22b1bf7032d420103db999bdfb9004daa924',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.5',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:05',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/.cpss.stage/twx/twd',
              Destination: '/srv/config',
              Mode: '',
              RW: false,
              Propagation: 'rprivate'
            }
          ]
        },
        {
          Id: '875c5d43221e3b57716fdf62875a4171f588a4bd180ab60334dfdbafd4e823ee',
          Names: [
            '/cpss41-a4newpss-mill_dcssignk_1'
          ],
          Image: 'sha256:a61fa9a741621ee54eb433d6e6031e05e6a23dced8a669b09a8ec482a2c86ed8',
          ImageID: 'sha256:a61fa9a741621ee54eb433d6e6031e05e6a23dced8a669b09a8ec482a2c86ed8',
          Command: '/bin/sh -c /entrypoint0.sh',
          Created: 1625485190,
          Ports: [],
          Labels: {
            'com.docker.compose.config-hash': '29425685e892c66bd5e0c375f259eeac11beb3b6d21bdb82df5ab6e37f50e078',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'dcssignk',
            'com.docker.compose.version': '1.29.1'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: 'c7d40cfb999676a227007dad47ea45add22318178857b2d4e8fc3f706e786636',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.2',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:02',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'volume',
              Name: 'cpss41-a4newpss-mill_cpss',
              Source: '/data/docker/volumes/cpss41-a4newpss-mill_cpss/_data',
              Destination: '/cpss',
              Driver: 'local',
              Mode: 'z',
              RW: true,
              Propagation: ''
            },
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/out',
              Destination: '/local/out',
              Mode: '',
              RW: true,
              Propagation: 'rprivate'
            },
            {
              Type: 'tmpfs',
              Source: '',
              Destination: '/local/tmp',
              Mode: '',
              RW: true,
              Propagation: ''
            }
          ]
        },
        {
          Id: '1f732b76986415c07259efd1a8c3e4f41483d67cbb2dc32e2b5bb320d9398e45',
          Names: [
            '/cpss41-a4newpss-mill_rpccrs_1'
          ],
          Image: 'registry.tais.aero/tais/php-rpc/rpc:master',
          ImageID: 'sha256:b113c090d0c66a3b21b11ddd8013702931d4310e97a3f03bc563fdd18220d66d',
          Command: '/cmd.sh',
          Created: 1625485190,
          Ports: [
            {
              IP: '0.0.0.0',
              PrivatePort: 80,
              PublicPort: 4104,
              Type: 'tcp'
            }
          ],
          Labels: {
            'com.docker.compose.config-hash': '95422401033eafd37d0109057152a84a4cfada1cc5471eed30407f4e62ba2b77',
            'com.docker.compose.container-number': '1',
            'com.docker.compose.oneoff': 'False',
            'com.docker.compose.project': 'cpss41-a4newpss-mill',
            'com.docker.compose.project.config_files': '.cpss.stage/cpss.yml',
            'com.docker.compose.project.environment_file': '.cpss.stage/cpss.env',
            'com.docker.compose.project.working_dir': '/home/mill/cpss41/.cpss.stage',
            'com.docker.compose.service': 'rpccrs',
            'com.docker.compose.version': '1.29.1'
          },
          State: 'running',
          Status: 'Up 16 minutes',
          HostConfig: {
            NetworkMode: 'cpss41-a4newpss-mill_cpss'
          },
          NetworkSettings: {
            Networks: {
              'cpss41-a4newpss-mill_cpss': {
                IPAMConfig: null,
                Links: null,
                Aliases: null,
                NetworkID: 'a4fa80aa32ba5a57e191b6750992769bad1fa72410cd8b9e1df249efee2a5465',
                EndpointID: '49650e42b4f2f5fcefd438aed5ddccb3c1f0a0159cf8d6f2f2c73abaad687ad7',
                Gateway: '192.168.64.1',
                IPAddress: '192.168.64.3',
                IPPrefixLen: 20,
                IPv6Gateway: '',
                GlobalIPv6Address: '',
                GlobalIPv6PrefixLen: 0,
                MacAddress: '02:42:c0:a8:40:03',
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/out',
              Destination: '/var/log/twx',
              Mode: '',
              RW: true,
              Propagation: 'rprivate'
            },
            {
              Type: 'bind',
              Source: '/home/mill/cpss41/.cpss.stage/rpc/crs/config.php',
              Destination: '/app/php-rpc/config.php',
              Mode: '',
              RW: true,
              Propagation: 'rprivate'
            }
          ]
        }
      ],
    knownInfo: {
      id: 44,
      project: 'rovdearc',
      conf: '',
      descr: 'Тестирование доработки про ковидные билеты А4',
      owner: 'sml',
      sirenaVersion: '12',
      db: 'Копия РОВ поднятая до 12',
      temulPan: 'CPSS44',
      path: '/data/home/sml/cpss44'
    }
  }
}
