const __wpo = {
  assets: {
    main: [
      './static/scripts/common.dac2ba23.js',
      './static/scripts/app.b7175de0.js',
      './static/scripts/manifest.8c59af2f.js',
      './manifest.json',
      './static/icons/food.svg',
      './static/icons/heart.svg',
      './static/icons/home.svg',
      './static/icons/image.svg',
      './static/icons/serving.svg',
      './static/icons/logo.svg',
      './static/icons/star-filled.svg',
      './static/icons/star.svg',
      './static/icons/time.svg',
      './static/icons/user.svg',
      './static/images/icon-192.png',
      './static/images/icon.png',
      './static/images/icon-512.png',
      './',
    ],
    additional: [],
    optional: [],
  },
  externals: [],
  hashesMap: {
    '8591111095ab73f11d0eda1c1cb6e8ceb4094597': './static/scripts/common.dac2ba23.js',
    '116a6b4e824cd4cf62c6ce344838f09f177425b5': './static/scripts/app.b7175de0.js',
    '7184ee6845a7804ec4e110440ced481beb35e870': './static/scripts/manifest.8c59af2f.js',
    a37efccb4100ce3e3d737f7adbd99f5f0851e182: './manifest.json',
    '1092f21a89d710c1f2b1477629ce7ab475deefc6': './static/icons/food.svg',
    '384835efc873cd5e2adc595540c9d3adc2a989ac': './static/icons/heart.svg',
    f978d31a5845d14783fe44faaff241f4165f8e74: './static/icons/home.svg',
    '8eb66517088d767f2b19689a6ab1b47dcf32d8f3': './static/icons/image.svg',
    d0208290c16c9747a94bfecb24af671c6cd47bc5: './static/icons/serving.svg',
    d98454178712a5aa7a571a79aaac9ade96c4c7a6: './static/icons/logo.svg',
    '2b66186fdb7e36c509b193ef32989e908057b3b3': './static/icons/star-filled.svg',
    '8fdca5b79547a7b356756c15bb99ab97ed94b9fc': './static/icons/star.svg',
    '013937ff0e1e9f4997050f74bfe80cd8a0b79183': './static/icons/time.svg',
    b1c42f68dcc612c7eac6221f6697739b3b78ad7e: './static/icons/user.svg',
    '1e13763edd7f3994d322836d1686e94236e216a6': './static/images/icon-192.png',
    '1fef1617864eb35d2f2f1da1273f8e57058d6c7c': './static/images/icon.png',
    '8e545723eb0ba09932b8283ea223c58a6870b814': './static/images/icon-512.png',
    b163be38f17855448234cb9d174052cc44ffe9fd: './',
  },
  navigateFallbackURL: '/',
  navigateFallbackForRedirects: true,
  strategy: 'changed',
  responseStrategy: 'cache-first',
  version: '3c4212440f85f62c68a1d14efc74e67ca95af337',
  name: 'webpack-offline',
  pluginVersion: '4.8.4',
  relativePaths: true,
};

/** *** */ (function (modules) { // webpackBootstrap
/** *** */ 	// The module cache
/** *** */ 	const installedModules = {}
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */
    /** *** */ 		// Check if module is in cache
    /** *** */ 		if (installedModules[moduleId]) {
      /** *** */ 			return installedModules[moduleId].exports
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = installedModules[moduleId] = {
      /** *** */ 			i: moduleId,
      /** *** */ 			l: false,
      /** *** */ 			exports: {},
      /** *** */ 		}
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
    /** *** */
    /** *** */ 		// Flag the module as loaded
    /** *** */ 		module.l = true
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports
    /** *** */ 	}
  /** *** */
  /** *** */
  /** *** */ 	// expose the modules object (__webpack_modules__)
  /** *** */ 	__webpack_require__.m = modules
  /** *** */
  /** *** */ 	// expose the module cache
  /** *** */ 	__webpack_require__.c = installedModules
  /** *** */
  /** *** */ 	// define getter function for harmony exports
  /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
    /** *** */ 		if (!__webpack_require__.o(exports, name)) {
      /** *** */ 			Object.defineProperty(exports, name, {
        /** *** */ 				configurable: false,
        /** *** */ 				enumerable: true,
        /** *** */ 				get: getter,
        /** *** */ 			})
      /** *** */ 		}
    /** *** */ 	}
  /** *** */
  /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
  /** *** */ 	__webpack_require__.n = function (module) {
    /** *** */ 		const getter = module && module.__esModule ?
      /** *** */ 			function getDefault() { return module.default } :
      /** *** */ 			function getModuleExports() { return module }
    /** *** */ 		__webpack_require__.d(getter, 'a', getter)
    /** *** */ 		return getter
    /** *** */ 	}
  /** *** */
  /** *** */ 	// Object.prototype.hasOwnProperty.call
  /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property) }
  /** *** */
  /** *** */ 	// __webpack_public_path__
  /** *** */ 	__webpack_require__.p = ''
  /** *** */
  /** *** */ 	// Load entry module and return exports
  /** *** */ 	return __webpack_require__(__webpack_require__.s = 0)
/** *** */ }([
/* 0 */
/** */ (function (module, exports, __webpack_require__) {
    (function () {
      const waitUntil = ExtendableEvent.prototype.waitUntil
      const respondWith = FetchEvent.prototype.respondWith
      const promisesMap = new WeakMap()

      ExtendableEvent.prototype.waitUntil = function (promise) {
        const extendableEvent = this
        let promises = promisesMap.get(extendableEvent)

        if (promises) {
          promises.push(Promise.resolve(promise))
          return
        }

        promises = [Promise.resolve(promise)]
        promisesMap.set(extendableEvent, promises)

        // call original method
        return waitUntil.call(extendableEvent, Promise.resolve().then(function processPromises() {
          const len = promises.length

          // wait for all to settle
          return Promise.all(promises.map(p => p.catch(() => {}))).then(() => {
            // have new items been added? If so, wait again
            if (promises.length != len) return processPromises()
            // we're done!
            promisesMap.delete(extendableEvent)
            // reject if one of the promises rejected
            return Promise.all(promises)
          })
        }))
      }

      FetchEvent.prototype.respondWith = function (promise) {
        this.waitUntil(promise)
        return respondWith.call(this, promise)
      }
    }())
    'use strict'

    if (typeof DEBUG === 'undefined') {
      var DEBUG = false
    }

    function WebpackServiceWorker(params, helpers) {
      const loaders = helpers.loaders
      const cacheMaps = helpers.cacheMaps

      const strategy = params.strategy
      const responseStrategy = params.responseStrategy

      const assets = params.assets
      const loadersMap = params.loaders || {}

      let hashesMap = params.hashesMap
      let externals = params.externals

      // Not used yet
      // const alwaysRevalidate = params.alwaysRevalidate;
      // const ignoreSearch = params.ignoreSearch;
      // const preferOnline = params.preferOnline;

      const CACHE_PREFIX = params.name
      const CACHE_TAG = params.version
      const CACHE_NAME = `${CACHE_PREFIX}:${CACHE_TAG}`

      const STORED_DATA_KEY = '__offline_webpack__data'

      mapAssets()

      const allAssets = [].concat(assets.main, assets.additional, assets.optional)
      const navigateFallbackURL = params.navigateFallbackURL
      const navigateFallbackForRedirects = params.navigateFallbackForRedirects

      self.addEventListener('install', (event) => {
        console.log('[SW]:', 'Install event')

        let installing

        if (strategy === 'changed') {
          installing = cacheChanged('main')
        } else {
          installing = cacheAssets('main')
        }

        event.waitUntil(installing)
      })

      self.addEventListener('activate', (event) => {
        console.log('[SW]:', 'Activate event')

        let activation = cacheAdditional()

        // Delete all assets which name starts with CACHE_PREFIX and
        // is not current cache (CACHE_NAME)
        activation = activation.then(storeCacheData)
        activation = activation.then(deleteObsolete)
        activation = activation.then(() => {
          if (self.clients && self.clients.claim) {
            return self.clients.claim()
          }
        })

        event.waitUntil(activation)
      })

      function cacheAdditional() {
        if (!assets.additional.length) {
          return Promise.resolve()
        }

        if (DEBUG) {
          console.log('[SW]:', 'Caching additional')
        }

        let operation

        if (strategy === 'changed') {
          operation = cacheChanged('additional')
        } else {
          operation = cacheAssets('additional')
        }

        // Ignore fail of `additional` cache section
        return operation.catch((e) => {
          console.error('[SW]:', 'Cache section `additional` failed to load')
        })
      }

      function cacheAssets(section) {
        const batch = assets[section]

        return caches.open(CACHE_NAME).then(cache => addAllNormalized(cache, batch, {
          bust: params.version,
          request: params.prefetchRequest,
        })).then(() => {
          logGroup(`Cached assets: ${section}`, batch)
        }).catch((e) => {
          console.error(e)
          throw e
        })
      }

      function cacheChanged(section) {
        return getLastCache().then((args) => {
          if (!args) {
            return cacheAssets(section)
          }

          const lastCache = args[0]
          const lastKeys = args[1]
          const lastData = args[2]

          const lastMap = lastData.hashmap
          const lastVersion = lastData.version

          if (!lastData.hashmap || lastVersion === params.version) {
            return cacheAssets(section)
          }

          const lastHashedAssets = Object.keys(lastMap).map(hash => lastMap[hash])

          const lastUrls = lastKeys.map((req) => {
            const url = new URL(req.url)
            url.search = ''
            url.hash = ''

            return url.toString()
          })

          const sectionAssets = assets[section]
          const moved = []
          const changed = sectionAssets.filter((url) => {
            if (lastUrls.indexOf(url) === -1 || lastHashedAssets.indexOf(url) === -1) {
              return true
            }

            return false
          })

          Object.keys(hashesMap).forEach((hash) => {
            const asset = hashesMap[hash]

            // Return if not in sectionAssets or in changed or moved array
            if (sectionAssets.indexOf(asset) === -1 || changed.indexOf(asset) !== -1 || moved.indexOf(asset) !== -1) return

            const lastAsset = lastMap[hash]

            if (lastAsset && lastUrls.indexOf(lastAsset) !== -1) {
              moved.push([lastAsset, asset])
            } else {
              changed.push(asset)
            }
          })

          logGroup(`Changed assets: ${section}`, changed)
          logGroup(`Moved assets: ${section}`, moved)

          const movedResponses = Promise.all(moved.map(pair => lastCache.match(pair[0]).then(response => [pair[1], response])))

          return caches.open(CACHE_NAME).then((cache) => {
            const move = movedResponses.then(responses => Promise.all(responses.map(pair => cache.put(pair[0], pair[1]))))

            return Promise.all([move, addAllNormalized(cache, changed, {
              bust: params.version,
              request: params.prefetchRequest,
            })])
          })
        })
      }

      function deleteObsolete() {
        return caches.keys().then((keys) => {
          const all = keys.map((key) => {
            if (key.indexOf(CACHE_PREFIX) !== 0 || key.indexOf(CACHE_NAME) === 0) return

            console.log('[SW]:', 'Delete cache:', key)
            return caches.delete(key)
          })

          return Promise.all(all)
        })
      }

      function getLastCache() {
        return caches.keys().then((keys) => {
          let index = keys.length
          let key

          while (index--) {
            key = keys[index]

            if (key.indexOf(CACHE_PREFIX) === 0) {
              break
            }
          }

          if (!key) return

          let cache

          return caches.open(key).then((_cache) => {
            cache = _cache
            return _cache.match(new URL(STORED_DATA_KEY, location).toString())
          }).then((response) => {
            if (!response) return

            return Promise.all([cache, cache.keys(), response.json()])
          })
        })
      }

      function storeCacheData() {
        return caches.open(CACHE_NAME).then((cache) => {
          const data = new Response(JSON.stringify({
            version: params.version,
            hashmap: hashesMap,
          }))

          return cache.put(new URL(STORED_DATA_KEY, location).toString(), data)
        })
      }

      self.addEventListener('fetch', (event) => {
        const url = new URL(event.request.url)
        url.hash = ''

        let urlString = url.toString()

        // Not external, so search part of the URL should be stripped,
        // if it's external URL, the search part should be kept
        if (externals.indexOf(urlString) === -1) {
          url.search = ''
          urlString = url.toString()
        }

        // Handle only GET requests
        const isGET = event.request.method === 'GET'
        let assetMatches = allAssets.indexOf(urlString) !== -1
        let cacheUrl = urlString

        if (!assetMatches) {
          const cacheRewrite = matchCacheMap(event.request)

          if (cacheRewrite) {
            cacheUrl = cacheRewrite
            assetMatches = true
          }
        }

        if (!assetMatches && isGET) {
          // If isn't a cached asset and is a navigation request,
          // fallback to navigateFallbackURL if available
          if (navigateFallbackURL && isNavigateRequest(event.request)) {
            event.respondWith(handleNavigateFallback(fetch(event.request)))

            return
          }
        }

        if (!assetMatches || !isGET) {
          // Fix for https://twitter.com/wanderview/status/696819243262873600
          if (url.origin !== location.origin && navigator.userAgent.indexOf('Firefox/44.') !== -1) {
            event.respondWith(fetch(event.request))
          }

          return
        }

        // Logic of caching / fetching is here
        // * urlString -- url to match from the CACHE_NAME
        // * event.request -- original Request to perform fetch() if necessary
        let resource

        if (responseStrategy === 'network-first') {
          resource = networkFirstResponse(event, urlString, cacheUrl)
        }
        // 'cache-first'
        // (responseStrategy has been validated before)
        else {
          resource = cacheFirstResponse(event, urlString, cacheUrl)
        }

        if (navigateFallbackURL && isNavigateRequest(event.request)) {
          resource = handleNavigateFallback(resource)
        }

        event.respondWith(resource)
      })

      self.addEventListener('message', (e) => {
        const data = e.data
        if (!data) return

        switch (data.action) {
          case 'skipWaiting':
            {
              if (self.skipWaiting) self.skipWaiting()
            } break
        }
      })

      function cacheFirstResponse(event, urlString, cacheUrl) {
        return cachesMatch(cacheUrl, CACHE_NAME).then((response) => {
          if (response) {
            if (DEBUG) {
              console.log('[SW]:', `URL [${cacheUrl}](${urlString}) from cache`)
            }

            return response
          }

          // Load and cache known assets
          const fetching = fetch(event.request).then((response) => {
            if (!response.ok) {
              if (DEBUG) {
                console.log('[SW]:', `URL [${urlString}] wrong response: [${response.status}] ${response.type}`)
              }

              return response
            }

            if (DEBUG) {
              console.log('[SW]:', `URL [${urlString}] from network`)
            }

            if (cacheUrl === urlString) {
              (function () {
                const responseClone = response.clone()
                const storing = caches.open(CACHE_NAME).then(cache => cache.put(urlString, responseClone)).then(() => {
                  console.log('[SW]:', `Cache asset: ${urlString}`)
                })

                event.waitUntil(storing)
              }())
            }

            return response
          })

          return fetching
        })
      }

      function networkFirstResponse(event, urlString, cacheUrl) {
        return fetch(event.request).then((response) => {
          if (response.ok) {
            if (DEBUG) {
              console.log('[SW]:', `URL [${urlString}] from network`)
            }

            return response
          }

          // Throw to reach the code in the catch below
          throw new Error('Response is not ok')
        })
        // This needs to be in a catch() and not just in the then() above
        // cause if your network is down, the fetch() will throw
          .catch(() => {
            if (DEBUG) {
              console.log('[SW]:', `URL [${urlString}] from cache if possible`)
            }

            return cachesMatch(cacheUrl, CACHE_NAME)
          })
      }

      function handleNavigateFallback(fetching) {
        return fetching.catch(() => {}).then((response) => {
          const isOk = response && response.ok
          const isRedirect = response && response.type === 'opaqueredirect'

          if (isOk || isRedirect && !navigateFallbackForRedirects) {
            return response
          }

          if (DEBUG) {
            console.log('[SW]:', `Loading navigation fallback [${navigateFallbackURL}] from cache`)
          }

          return cachesMatch(navigateFallbackURL, CACHE_NAME)
        })
      }

      function mapAssets() {
        Object.keys(assets).forEach((key) => {
          assets[key] = assets[key].map((path) => {
            const url = new URL(path, location)

            url.hash = ''

            if (externals.indexOf(path) === -1) {
              url.search = ''
            }

            return url.toString()
          })
        })

        Object.keys(loadersMap).forEach((key) => {
          loadersMap[key] = loadersMap[key].map((path) => {
            const url = new URL(path, location)

            url.hash = ''

            if (externals.indexOf(path) === -1) {
              url.search = ''
            }

            return url.toString()
          })
        })

        hashesMap = Object.keys(hashesMap).reduce((result, hash) => {
          const url = new URL(hashesMap[hash], location)
          url.search = ''
          url.hash = ''

          result[hash] = url.toString()
          return result
        }, {})

        externals = externals.map((path) => {
          const url = new URL(path, location)
          url.hash = ''

          return url.toString()
        })
      }

      function addAllNormalized(cache, requests, options) {
        const allowLoaders = options.allowLoaders !== false
        const bustValue = options && options.bust
        const requestInit = options.request || {
          credentials: 'omit',
          mode: 'cors',
        }

        return Promise.all(requests.map((request) => {
          if (bustValue) {
            request = applyCacheBust(request, bustValue)
          }

          return fetch(request, requestInit).then(fixRedirectedResponse)
        })).then((responses) => {
          if (responses.some(response => !response.ok)) {
            return Promise.reject(new Error('Wrong response status'))
          }

          const extracted = []
          let addAll = responses.map((response, i) => {
            if (allowLoaders) {
              extracted.push(extractAssetsWithLoaders(requests[i], response))
            }

            return cache.put(requests[i], response)
          })

          if (extracted.length) {
            (function () {
              const newOptions = copyObject(options)
              newOptions.allowLoaders = false

              let waitAll = addAll

              addAll = Promise.all(extracted).then((all) => {
                const extractedRequests = [].concat.apply([], all)

                if (requests.length) {
                  waitAll = waitAll.concat(addAllNormalized(cache, extractedRequests, newOptions))
                }

                return Promise.all(waitAll)
              })
            }())
          } else {
            addAll = Promise.all(addAll)
          }

          return addAll
        })
      }

      function extractAssetsWithLoaders(request, response) {
        const all = Object.keys(loadersMap).map((key) => {
          const loader = loadersMap[key]

          if (loader.indexOf(request) !== -1 && loaders[key]) {
            return loaders[key](response.clone())
          }
        }).filter(a => !!a)

        return Promise.all(all).then(all => [].concat.apply([], all))
      }

      function matchCacheMap(request) {
        const urlString = request.url
        const url = new URL(urlString)

        let requestType

        if (request.mode === 'navigate') {
          requestType = 'navigate'
        } else if (url.origin === location.origin) {
          requestType = 'same-origin'
        } else {
          requestType = 'cross-origin'
        }

        for (let i = 0; i < cacheMaps.length; i++) {
          const map = cacheMaps[i]

          if (!map) continue
          if (map.requestTypes && map.requestTypes.indexOf(requestType) === -1) {
            continue
          }

          let newString

          if (typeof map.match === 'function') {
            newString = map.match(url, request)
          } else {
            newString = urlString.replace(map.match, map.to)
          }

          if (newString && newString !== urlString) {
            return newString
          }
        }
      }
    }

    function cachesMatch(request, cacheName) {
      return caches.match(request, {
        cacheName,
      }).then((response) => {
        if (isNotRedirectedResponse()) {
          return response
        }

        // Fix already cached redirected responses
        return fixRedirectedResponse(response).then(fixedResponse => caches.open(cacheName).then(cache => cache.put(request, fixedResponse)).then(() => fixedResponse))
      })
      // Return void if error happened (cache not found)
        .catch(() => {})
    }

    function applyCacheBust(asset, key) {
      const hasQuery = asset.indexOf('?') !== -1
      return `${asset + (hasQuery ? '&' : '?')}__uncache=${encodeURIComponent(key)}`
    }

    function getClientsURLs() {
      if (!self.clients) {
        return Promise.resolve([])
      }

      return self.clients.matchAll({
        includeUncontrolled: true,
      }).then((clients) => {
        if (!clients.length) return []

        const result = []

        clients.forEach((client) => {
          const url = new URL(client.url)
          url.search = ''
          url.hash = ''
          const urlString = url.toString()

          if (!result.length || result.indexOf(urlString) === -1) {
            result.push(urlString)
          }
        })

        return result
      })
    }

    function isNavigateRequest(request) {
      return request.mode === 'navigate' || request.headers.get('Upgrade-Insecure-Requests') || (request.headers.get('Accept') || '').indexOf('text/html') !== -1
    }

    function isNotRedirectedResponse(response) {
      return !response || !response.redirected || !response.ok || response.type === 'opaqueredirect'
    }

    // Based on https://github.com/GoogleChrome/sw-precache/pull/241/files#diff-3ee9060dc7a312c6a822cac63a8c630bR85
    function fixRedirectedResponse(response) {
      if (isNotRedirectedResponse(response)) {
        return Promise.resolve(response)
      }

      const body = 'body' in response ? Promise.resolve(response.body) : response.blob()

      return body.then(data => new Response(data, {
        headers: response.headers,
        status: response.status,
      }))
    }

    function copyObject(original) {
      return Object.keys(original).reduce((result, key) => {
        result[key] = original[key]
        return result
      }, {})
    }

    function logGroup(title, assets) {
      console.groupCollapsed('[SW]:', title)

      assets.forEach((asset) => {
        console.log('Asset:', asset)
      })

      console.groupEnd()
    }
    WebpackServiceWorker(__wpo, {
      loaders: {},
      cacheMaps: [],
    })
    module.exports = __webpack_require__(1)
    /** */ }),
  /* 1 */
  /** */ (function (module, exports) {


    /** */ }),
/** *** */ ]))
