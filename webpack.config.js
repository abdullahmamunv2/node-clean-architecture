const path = require('path');
var nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const NodemonPlugin = require( 'nodemon-webpack-plugin' );
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const ENV = {
    PRODUCTION  :  'production',
    STAGING     :  'staging',
    DEVELOPMENT :  'development' 
}

const PLATFORM = 'node'
const TARGET_DIR = 'dist';

module.exports = (env,args) =>{
  const ENVIRONMENT = env=='stage' || env=='prod' ? (env=='stage' ? 'staging' : 'production') : 'development';
  const MODE = ENVIRONMENT == 'development'? ENV.DEVELOPMENT : ENV.PRODUCTION;
  let coreConfig = {
    node: {
      __dirname: false
    },
    mode : MODE,
    target : PLATFORM,
     entry  : path.resolve(__dirname, 'src/main/core/index.ts'),
     externals : [nodeExternals()],
     resolve : {
        extensions: ['.ts'],
        alias: {
            '@core': path.resolve(__dirname, 'src/main/core')
        }
      },
     output : {
      path: path.join(__dirname, TARGET_DIR,ENVIRONMENT,'src','core'),   
      filename: 'index.js',
      libraryTarget: 'commonjs2'
    }
  };
  let adapterConfig = {
    node: {
      __dirname: false
    },
    mode : MODE,
    target : PLATFORM,
    entry     : path.resolve(__dirname, 'src/main/adapter/index.ts'),
    externals : [nodeExternals(),'@core'],
    resolve : {
      extensions: ['.ts'],
      alias: {
          '@adapter': path.resolve(__dirname, 'src/main/adapter')
      }
    },
    output : {
      path: path.join(__dirname, TARGET_DIR,ENVIRONMENT,'src','adapter'),   
      filename: 'index.js',
      libraryTarget: 'commonjs2'
    }
  };
  let infrastructureConfig = {
    node: {
      __dirname: false
    },
    mode : MODE,
    target : PLATFORM,
    entry  : path.resolve(__dirname, 'src/main/infrastructure/index.ts'),
    externals : [nodeExternals(),'@core','@adapter'],
    resolve : {
      extensions: ['.ts'],
      alias: {
          '@infrastructure': path.resolve(__dirname, 'src/main/infrastructure')
      }
    },
    output : {
      path: path.join(__dirname, TARGET_DIR,ENVIRONMENT,'src','infrastructure'),   
      filename: 'index.js',
      libraryTarget: 'commonjs2'
    }
  };

  let mainConfig = {
    node: {
      __dirname: false
    },
    mode : MODE,
    target : PLATFORM,
    entry  : path.resolve(__dirname, 'src/main/main.ts'),
    externals : [nodeExternals(),'@core','@adapter','@infrastructure'],
    output : {
      path: path.join(__dirname, TARGET_DIR,ENVIRONMENT,'src'),   
      filename: 'main.js',
      libraryTarget: 'commonjs2'
    }
  };
  

  if(ENVIRONMENT === ENV.DEVELOPMENT){
    
    mainConfig.module =  {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    }
      
      coreConfig.module =  {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: [
              /node_modules/
            ],
          },
        ],
      }

      adapterConfig.module =  {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: [
              /node_modules/
            ],
          },
        ],
      }

      infrastructureConfig.module =  {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: [
              /node_modules/
            ],
          },
        ],
      }

      mainConfig.plugins = [
        new CopyPlugin([
          { from: path.resolve(__dirname,'config/default.json') , to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT,'config/default.json') },
          { from: path.resolve(__dirname,'config/custom-environment-variables.json') , to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT,'config/custom-environment-variables.json') },
          { from: path.resolve(__dirname,'config/development.json') , to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT,'config/development.json') },
          { from: path.resolve(__dirname,'package.json'), to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT) },
          { from: path.resolve(__dirname,'pm2.run.json'), to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT) },
          { from: path.resolve(__dirname,'log4js.json'), to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT) },
          { from: path.resolve(__dirname,'module.alias.config.js'), to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT) },
        ]),
        /*new NodemonPlugin({
          watch: path.resolve('./dist/development'),
          script: './dist/development/src/main.js',
          verbose: true,
        }),*/
        new BundleAnalyzerPlugin()
      ]


      coreConfig.plugins = [
        //new BundleAnalyzerPlugin()
      ]

      adapterConfig.plugins = [
        //new BundleAnalyzerPlugin()
      ]

      infrastructureConfig.plugins = [
        //new BundleAnalyzerPlugin()
      ]

      return mainConfig;
      //return [mainConfig,infrastructureConfig,adapterConfig,coreConfig];


  }
  else if(ENVIRONMENT === ENV.STAGING){
  
  mainConfig.module =  {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  }
    
    coreConfig.module =  {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: [
            /node_modules/
          ],
        },
      ],
    }

    adapterConfig.module =  {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: [
            /node_modules/
          ],
        },
      ],
    }

    infrastructureConfig.module =  {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: [
            /node_modules/
          ],
        },
      ],
    }

    mainConfig.plugins = [
      new CopyPlugin([
        { from: path.resolve(__dirname,'config/default.json') , to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT,'config/default.json') },
        { from: path.resolve(__dirname,'config/custom-environment-variables.json') , to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT,'config/custom-environment-variables.json') },
        { from: path.resolve(__dirname,'config/staging.json') , to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT,'config/staging.json') },
        { from: path.resolve(__dirname,'cert') , to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT,'cert') },
        { from: path.resolve(__dirname,'package.json'), to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT) },
        { from: path.resolve(__dirname,'pm2.run.json'), to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT) },
        { from: path.resolve(__dirname,'log4js.json'), to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT) },
        { from: path.resolve(__dirname,'module.alias.config.js'), to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT) },
      ]),
      //new NodemonPlugin(),
      //new BundleAnalyzerPlugin()
    ]


    coreConfig.plugins = [
      //new BundleAnalyzerPlugin()
    ]

    adapterConfig.plugins = [
      //new BundleAnalyzerPlugin()
    ]

    infrastructureConfig.plugins = [
      //new BundleAnalyzerPlugin()
    ]

    return [mainConfig,infrastructureConfig,adapterConfig,coreConfig];
  }
  else{
  
  mainConfig.module =  {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  }
    
    coreConfig.module =  {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: [
            /node_modules/
          ],
        },
      ],
    }

    adapterConfig.module =  {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: [
            /node_modules/
          ],
        },
      ],
    }

    infrastructureConfig.module =  {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: [
            /node_modules/
          ],
        },
      ],
    }

    mainConfig.plugins = [
      new CopyPlugin([
        { from: path.resolve(__dirname,'config/default.json') , to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT,'config/default.json') },
        { from: path.resolve(__dirname,'config/custom-environment-variables.json') , to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT,'config/custom-environment-variables.json') },
        { from: path.resolve(__dirname,'config/production.json') , to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT,'config/production.json') },
        { from: path.resolve(__dirname,'cert') , to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT,'cert') },
        { from: path.resolve(__dirname,'package.json'), to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT) },
        { from: path.resolve(__dirname,'pm2.run.json'), to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT) },
        { from: path.resolve(__dirname,'log4js.json'), to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT) },
        { from: path.resolve(__dirname,'module.alias.config.js'), to: path.resolve(__dirname,TARGET_DIR,ENVIRONMENT) },
      ]),
      //new NodemonPlugin(),
      //new BundleAnalyzerPlugin()
    ]


    coreConfig.plugins = [
      //new BundleAnalyzerPlugin()
    ]

    adapterConfig.plugins = [
      //new BundleAnalyzerPlugin()
    ]

    infrastructureConfig.plugins = [
      //new BundleAnalyzerPlugin()
    ]

    return [mainConfig,infrastructureConfig,adapterConfig,coreConfig];
  }
} 