node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Deploy'){
//       if(env.BRANCH_NAME == 'main'){
        sh 'echo "Deploying to production"'
//       }
    }
  }
  catch (err) {
    throw err
  }
}
