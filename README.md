# Additional Exercise instructions for node.js

## Exercise 1, 2, 3

No additional tools or setup is needed.

## Exercise 4

### Create Client Credentials

Create a new folder for the training. A good place is a folder `Camunda-8-Training` on your desktop.

Download the Client credentitials as Env Vars to this folder.

Open a terminal window. On Mac, you can find them in Other Apps.

In the terminal window use `cd` to change directory and navigate to your directory. `cd Desktop/Camunda-8-Training`

Don't close this terminal window until the training is finished. If you have closed it accidentially, do the last steps again.

To load the url and the credetials of your Camunda 8 Cluster, enter `source CamundaCloudMgmtAPI-Client-THE-NAME-YOU-ENTERED-BEFORE.txt`

### Process Execution

Download `zbctl.darwin` from https://github.com/camunda/zeebe/releases to this directory as well. On the page, select the last release and expand all asserts.

Make `zbctl.darwin` shorter and executable. To rename the program, enter `mv zbctl.darwin zbctl`. To make it executable, enter `chmod u+x zbctl`.

Test the client with entering `./zbctl version` in the terminal window. A message appears, that zbctl could be malware as it was developed by an unidentified developer (https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac). Open a Finder window and use ctrl-click to open the app. When you select Open, zbctl is trusted.  

In the terminal window, get back to the last command with "arrow up". Press enter to execute it again. Another hint appears and you can accept the changes. 

It should display the version number now.

Test the connection to your cluster. Enter `./zbctl status`. It should list the cluster size and brokers with their Ids.

Enter `./zbctl` for each task in the exercises. Continue with the exercise descriptions.

## Exercise 5

Check if you have node already installed. In the terminal window, enter `node --version`.

To install it, the most easy way on a Mac is `brew install node`. Check the installation with the command above.

Install the zeebe-node-js-client with the command `npm i zeebe-node`. (https://github.com/camunda-community-hub/zeebe-client-node-js#install)

Download the inital client code from here: https://github.com/ingorichtsmeier/camunda-8-node-js-training/archive/refs/heads/master.zip

Unzip the archive into the training folder on your desktop.

Open an Integrated Developer Environment like VS Code and open the unzipped files.

Start your Zeebe node client with the command `node worker/worker.js` It should display the Cluster topology and the message `Ready to work`.

To stop the client in it's loop, running for 10 minutes, press Ctrl-C.

The file `worker.js` containes comments with code for each exercise. The comments fit to the detailed exercise descriptions.

Copy parts of the comments into the code and step by step.
