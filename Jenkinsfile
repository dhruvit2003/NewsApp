pipeline{
 	
	agent any

	stages {

		stage("build") {

			steps {
				echo 'building the application.....'			            
				script {
					def test = 2 + 4 > 5 ? 'Very Cool' : 'Not Cool'
					echo "The result is: ${test}"
				}
			}
		}

		stage("run forntend") {

			steps {
				echo 'executing yarn.....'			            
				nodejs('Node - 20.19.0'){
					sh 'yarn install'
				}
			}
    	}

		stage("run backend") {
        
			steps {
			 	echo 'executing gradle.....'			            
			 	withGradle() {
			 		sh './gradlew -v'
			 	}
			}
    	}
	}
}
