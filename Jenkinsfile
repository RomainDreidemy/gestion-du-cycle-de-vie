node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'npm --version'
      sh 'printenv'
    }
    stage('Deploy'){
//       if(env.BRANCH_NAME == 'main'){
        sh 'echo "Deploying to production"'
        sh 'npm install'
        sh 'npm run build'
        sh 'ls -la ./build '
//       }
    }
  }
  catch (err) {
    throw err
  }
}
