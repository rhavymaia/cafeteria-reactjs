pipeline {
    agent {
        docker {
            image 'node:20.2.0-alpine3.17' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'CI=false npm run build'
            }
        }

        stage("Deploy") {
            steps {
                // sh "rm -rf /home/pweb2/Web/gcsi/loaderbalancer/build"
                // sh "mkdir /home/pweb2/Web/gcsi/loaderbalancer/build"
                sh "docker cp 8cab8fde683f:/var/jenkins_home/workspace/cafeteria-reactjs/build/ /home/pweb2/Web/gcsi/loaderbalancer/build/"
            }
        }
    }
}


