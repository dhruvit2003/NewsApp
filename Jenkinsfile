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

		stage("test") {

			steps {
				echo 'testing the application.....'			            
			}
    	}

		stage("deploy") {
        
			steps {
			 	echo 'deploying the application.....'			            
			}
    	}
	}
}
