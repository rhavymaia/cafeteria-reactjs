pipeline {
    agent {
        docker {
            image 'node:19-alpine3.15' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage("Deploy") {
            steps {
                sh "rm -rf /home/pweb2/Web/gcsi/loaderbalancer/build"
                sh "cp -r /home/pweb2/Web/gcsi/jenkins/jenkins_home/workspace/cafeteria-reactjs/build/ /home/pweb2/Web/gcsi/loaderbalancer/build/"
            }
        }
    }
}


